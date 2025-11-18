"use client";

import { getItemId } from "@/services/Item/ItemId";
import { mainDomain } from "@/utils/mainDomain";
import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

function AudioPlayer({ podcast }: { podcast: Items }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [audioDetails, setAudioDetails] = useState<ItemsId | null>(null);
  const [shouldPlayAfterLoad, setShouldPlayAfterLoad] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  // تابع برای دریافت اطلاعات آهنگ
  const fetchAudioDetails = async (shouldPlay: boolean = false) => {
    try {
      setIsLoading(true);

      const details = await getItemId(podcast.id);
      setAudioDetails(details);

      // استخراج لینک آهنگ از properties
      const audioProperty = details.properties?.find(
        (prop: any) => prop.propertyKey === "p1047_padcastfile"
      );


      if (audioProperty?.value) {
        // ساخت لینک کامل آهنگ - رفع مشکل دو اسلش
        const cleanPath = audioProperty.value.startsWith("/")
          ? audioProperty.value
          : `/${audioProperty.value}`;
        const fullAudioUrl = `${mainDomain.replace(/\/$/, "")}${cleanPath}`;

        setAudioUrl(fullAudioUrl);
        if (shouldPlay) {
          setShouldPlayAfterLoad(true);
        }
      } else {
        console.error("❌ property p1047_padcastfile پیدا نشد یا value ندارد");
      }
    } catch (error) {
      console.error("❌ خطا در دریافت اطلاعات آهنگ:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // وقتی audioUrl تغییر کرد، audio element را آپدیت کن
  useEffect(() => {
    const audio = audioRef.current;
    if (audio && audioUrl) {

      const handleCanPlay = () => {
        if (shouldPlayAfterLoad) {
          audio
            .play()
            .then(() => {
              setShouldPlayAfterLoad(false);
            })
            .catch((error) => {
              console.error("❌ خطا در پخش خودکار:", error);
              setShouldPlayAfterLoad(false);
            });
        }
      };

      const handleError = (e: any) => {
        console.error("❌ خطا در audio element:", e);
       
        setShouldPlayAfterLoad(false);
      };

      const handleLoadStart = () => {
      };

      audio.addEventListener("canplay", handleCanPlay);
      audio.addEventListener("error", handleError);
      audio.addEventListener("loadstart", handleLoadStart);

      // بارگذاری فایل صوتی
      audio.load();

      return () => {
        audio.removeEventListener("canplay", handleCanPlay);
        audio.removeEventListener("error", handleError);
        audio.removeEventListener("loadstart", handleLoadStart);
      };
    }
  }, [audioUrl, shouldPlayAfterLoad]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;


    const setAudioData = () => {
      setDuration(audio.duration);
    };

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("loadeddata", setAudioData);
    audio.addEventListener("timeupdate", setAudioTime);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []); // این useEffect فقط یک بار اجرا شود

  const togglePlayPause = async () => {
  
    // اگر audioUrl وجود ندارد، اول اطلاعات را دریافت کن
    if (!audioUrl) {
      await fetchAudioDetails(true); // true یعنی بعد از لود پخش شود
      return;
    }

    const audio = audioRef.current;
    if (!audio) {
      console.error("❌ audioRef.current null است");
      return;
    }

    

    if (isPlaying) {
      audio.pause();
    } else {
      try {
        await audio.play();
      } catch (error) {
        console.error("❌ خطا در پخش آهنگ:", error);
        setIsPlaying(false);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audio.volume = newVolume;
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.volume = volume;
      setIsMuted(false);
    } else {
      audio.volume = 0;
      setIsMuted(true);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div
      className="w-full bg-white rounded-xl shadow-lg border border-gray-200 p-3 sm:p-4 mb-2!"
      dir="rtl"
    >
      {/* Audio Element (مخفی) */}
      <audio ref={audioRef} preload="metadata">
        {audioUrl && <source src={audioUrl} type="audio/mpeg" />}
        مرورگر شما از پخش کننده صدا پشتیبانی نمی‌کند.
      </audio>

      {/* دسکتاپ - چیدمان افقی */}
      <div className="flex items-center gap-4">
        {/* اطلاعات و کنترل‌ها - وسط */}
        <div className="flex-1 min-w-0">
          {/* عنوان و هنرمند */}
          <div className="mb-2! text-right">
            <h3 className="font-bold text-gray-800 text-xl line-clamp-2 mb-2!">
              {podcast.title}
            </h3>
            <p className="text-gray-600 text-xs truncate">
              {podcast.categoryTitle}
            </p>
          </div>

          <div className="flex flex-col items-end w-full">
            {/* Progress Bar و زمان */}
            <div className="flex items-center gap-3 w-full">
              <span className="text-xs text-gray-500 w-8 shrink-0 text-left">
                {formatTime(duration)}
              </span>

              <div className="flex-1">
                <input
                  dir="ltr"
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime}
                  onChange={handleSeek}
                  disabled={!audioUrl}
                  className={`w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer slider ${
                    !audioUrl ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                />
              </div>

              <span className="text-xs text-gray-500 w-8 shrink-0 text-right">
                {formatTime(currentTime)}
              </span>
            </div>

            {/* کنترل حجم صدا */}
            <div className="flex items-center gap-2 shrink-0 mt-2">
              <div className="w-20">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  disabled={!audioUrl}
                  className={`w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer volume-slider ${
                    !audioUrl ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                />
              </div>

              <button
                onClick={toggleMute}
                disabled={!audioUrl}
                className={`text-gray-600 hover:text-gray-800 transition-colors p-1 w-9 ${
                  !audioUrl ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isMuted ? (
                  <FaVolumeMute className="text-sm" />
                ) : (
                  <FaVolumeUp className="text-sm" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* دکمه پلی - سمت چپ */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={togglePlayPause}
            disabled={isLoading}
            className="w-10 h-10 bg-[#ce1a2a] cursor-pointer text-white rounded-full hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shrink-0"
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : isPlaying ? (
              <FaPause className="text-sm" />
            ) : (
              <FaPlay className="text-sm" />
            )}
          </button>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 14px;
          width: 14px;
          border-radius: 50%;
          background: #ce1a2a;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        }
        .slider::-moz-range-thumb {
          height: 14px;
          width: 14px;
          border-radius: 50%;
          background: #ce1a2a;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        }

        .volume-slider::-webkit-slider-thumb {
          appearance: none;
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: #ce1a2a;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }
        .volume-slider::-moz-range-thumb {
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: #ce1a2a;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}

export default AudioPlayer;
