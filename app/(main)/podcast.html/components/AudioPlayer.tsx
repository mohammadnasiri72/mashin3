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
  const [audioLoaded, setAudioLoaded] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  // تابع برای دریافت اطلاعات آهنگ
  const fetchAudioDetails = async () => {
    try {
      setIsLoading(true);
      console.log("📥 شروع دریافت اطلاعات آهنگ برای ID:", podcast.id);

      const details = await getItemId(podcast.id);
      console.log("✅ اطلاعات آهنگ دریافت شد:", details);

      // استخراج لینک آهنگ از properties
      const audioProperty = details.properties?.find(
        (prop: any) => prop.propertyKey === "p1047_padcastfile"
      );

      console.log("🔍 جستجو برای property p1047_padcastfile:", audioProperty);

      if (audioProperty?.value) {
        // ساخت لینک کامل آهنگ
        const cleanPath = audioProperty.value.startsWith("/")
          ? audioProperty.value
          : `/${audioProperty.value}`;
        const fullAudioUrl = `${mainDomain.replace(/\/$/, "")}${cleanPath}`;
        console.log("🎵 لینک کامل آهنگ:", fullAudioUrl);

        setAudioUrl(fullAudioUrl);
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
      console.log("🔄 آپدیت audio element با لینک جدید:", audioUrl);

      const handleLoadedData = () => {
        console.log("✅ audio data loaded - duration:", audio.duration);
        setAudioLoaded(true);
        setDuration(audio.duration);
      };

      const handleCanPlay = () => {
        console.log("🎵 audio می‌تواند پخش شود");
        setAudioLoaded(true);
      };

      const handleCanPlayThrough = () => {
        console.log("🎵 audio می‌تواند بدون وقفه پخش شود");
        setAudioLoaded(true);
      };

      const handleError = (e: any) => {
        console.error("❌ خطا در audio element:", e);
        console.log("📊 وضعیت audio error:", audio.error);
        setAudioLoaded(false);
      };

      const handleLoadStart = () => {
        console.log("🔄 شروع لود audio");
        setAudioLoaded(false);
      };

      // اضافه کردن event listeners
      audio.addEventListener("loadeddata", handleLoadedData);
      audio.addEventListener("canplay", handleCanPlay);
      audio.addEventListener("canplaythrough", handleCanPlayThrough);
      audio.addEventListener("error", handleError);
      audio.addEventListener("loadstart", handleLoadStart);

      // تنظیم src و load کردن
      audio.src = audioUrl;
      audio.load();

      console.log("🎯 audio src تنظیم شد، منتظر events...");

      return () => {
        audio.removeEventListener("loadeddata", handleLoadedData);
        audio.removeEventListener("canplay", handleCanPlay);
        audio.removeEventListener("canplaythrough", handleCanPlayThrough);
        audio.removeEventListener("error", handleError);
        audio.removeEventListener("loadstart", handleLoadStart);
      };
    }
  }, [audioUrl]);

  // event listeners اصلی برای audio
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    console.log("🎧 تنظیم event listeners اصلی برای audio");

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      console.log("⏹️ آهنگ به پایان رسید");
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const handlePlay = () => {
      console.log("▶️ آهنگ شروع به پخش کرد");
      setIsPlaying(true);
    };

    const handlePause = () => {
      console.log("⏸️ آهنگ متوقف شد");
      setIsPlaying(false);
    };

    audio.addEventListener("timeupdate", setAudioTime);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("timeupdate", setAudioTime);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  const togglePlayPause = async () => {
    console.log("🖱️ کلیک روی دکمه پلی/پاز");
    console.log("📊 وضعیت فعلی:", {
      isPlaying,
      audioUrl,
      audioLoaded,
      isLoading,
    });

    // اگر audioUrl وجود ندارد، اول اطلاعات را دریافت کن
    if (!audioUrl) {
      console.log("🎵 audioUrl وجود ندارد، دریافت اطلاعات...");
      await fetchAudioDetails();
      return;
    }

    const audio = audioRef.current;
    if (!audio) {
      console.error("❌ audioRef.current null است");
      return;
    }

    console.log("📊 وضعیت audio element:", {
      paused: audio.paused,
      ended: audio.ended,
      readyState: audio.readyState,
      networkState: audio.networkState,
      error: audio.error,
      src: audio.src,
    });

    if (isPlaying) {
      console.log("⏸️ توقف آهنگ");
      audio.pause();
    } else {
      console.log("▶️ تلاش برای پخش آهنگ");
      try {
        // بررسی اینکه آیا audio آماده پخش است
        if (audio.readyState >= 2) {
          // HAVE_CURRENT_DATA or more
          await audio.play();
          console.log("✅ پخش آهنگ موفقیت‌آمیز بود");
        } else {
          console.log("⏳ audio آماده پخش نیست، منتظر می‌مانیم...");
          // اگر آماده نیست، منتظر می‌مانیم و دوباره تلاش می‌کنیم
          setTimeout(() => {
            audio
              .play()
              .then(() => {
                console.log("✅ پخش آهنگ بعد از انتظار موفق بود");
              })
              .catch((error) => {
                console.error("❌ خطا در پخش بعد از انتظار:", error);
              });
          }, 500);
        }
      } catch (error) {
        console.error("❌ خطا در پخش آهنگ:", error);
        // تلاش مجدد
        setTimeout(() => {
          audio.play().catch((e) => console.error("❌ خطا در تلاش مجدد:", e));
        }, 1000);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = parseFloat(e.target.value);
    console.log("⏩ seek به زمان:", newTime);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newVolume = parseFloat(e.target.value);
    console.log("🔊 تغییر حجم صدا به:", newVolume);
    setVolume(newVolume);
    audio.volume = newVolume;
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    console.log("🔇 تغییر حالت mute:", !isMuted);
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

  // تست دسترسی به فایل
  const testAudioAccess = async () => {
    if (!audioUrl) return;

    try {
      console.log("🧪 تست دسترسی به فایل صوتی...");
      const response = await fetch(audioUrl, { method: "HEAD" });
      console.log("📊 وضعیت HTTP:", response.status, response.ok);

      if (response.ok) {
        console.log("✅ فایل صوتی قابل دسترسی است");
      } else {
        console.error(
          "❌ فایل صوتی قابل دسترسی نیست - وضعیت:",
          response.status
        );
      }
    } catch (error) {
      console.error("❌ خطا در تست دسترسی:", error);
    }
  };

  // وقتی audioUrl تغییر کرد، تست دسترسی را اجرا کن
  useEffect(() => {
    if (audioUrl) {
      testAudioAccess();
    }
  }, [audioUrl]);

  return (
    <div
      className="w-full bg-white rounded-xl shadow-lg border border-gray-200 p-3 sm:p-4 mb-2!"
      dir="rtl"
    >
      {/* Audio Element (مخفی) */}
      <audio ref={audioRef} preload="auto">
        مرورگر شما از پخش کننده صدا پشتیبانی نمی‌کند.
      </audio>

      {/* نمایش اطلاعات دیباگ */}
      <div className="text-xs text-gray-500 mb-2 p-2 bg-gray-100 rounded">
        <div>Audio URL: {audioUrl ? "✅ موجود" : "❌ ناموجود"}</div>
        <div>Audio Loaded: {audioLoaded ? "✅" : "❌"}</div>
        <div>isPlaying: {isPlaying ? "▶️" : "⏸️"}</div>
        <div>isLoading: {isLoading ? "🔄" : "✅"}</div>
        <div>Duration: {formatTime(duration)}</div>
        <button
          onClick={testAudioAccess}
          className="mt-1 px-2 py-1 bg-blue-500 text-white rounded text-xs"
        >
          تست دسترسی
        </button>
      </div>

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
                  disabled={!audioLoaded}
                  className={`w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer slider ${
                    !audioLoaded ? "opacity-50 cursor-not-allowed" : ""
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
                  disabled={!audioLoaded}
                  className={`w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer volume-slider ${
                    !audioLoaded ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                />
              </div>

              <button
                onClick={toggleMute}
                disabled={!audioLoaded}
                className={`text-gray-600 hover:text-gray-800 transition-colors p-1 w-9 ${
                  !audioLoaded ? "opacity-50 cursor-not-allowed" : ""
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
            disabled={isLoading || (audioUrl && !audioLoaded)}
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
