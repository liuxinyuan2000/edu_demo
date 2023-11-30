import PromptForm from "components/prompt-form";
import Predictions from "components/predictions";
import { useState,useEffect } from "react";
// import Error from "components/error"
import seeds from "lib/seeds";
import pkg from "../package.json";


export default function Home() {
  const [error, setError] = useState(null);
  const [submissionCount, setSubmissionCount] = useState(0);
  const [predictions, setPredictions] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [seed] = useState(seeds[Math.floor(Math.random() * seeds.length)]);
  const [initialPrompt] = useState(seed.prompt);

  const [videoRes, setVideoRes] = useState(null); // 用于存储video的blob url

  async function handleButtonClick() {
    // 检查 video 是否存在
    if (!video) {
      console.error("No video selected.");
      return;
    }
  
    setIsProcessing(true); // 设置 isProcessing 为 true
  
    // 创建 FormData 对象并附加视频文件
    const formData = new FormData();
    formData.append("file", video);
  
    try {
      // 使用 fetch 发送 POST 请求
      const response = await fetch("http://140.210.197.137:7781/inference_ania", {
        method: "POST",
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
        },
        body: formData,
      });
  
      // 检查响应是否成功
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      // 处理响应数据（根据实际情况修改）
      const data = await response.json();
      console.log("Response data:", data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsProcessing(false); // 设置 isProcessing 为 false
    }
  }

  useEffect(() => {
    console.log("enter effect");
    fetch("/api/getFile")
      .then((response) => {
        if (!response.ok) {
          console.log("response:", response);
          throw new Error("Network response was not ok");
        }
        console.log("getfile!!!:", response);
        return response.blob(); // 将响应转换为 Blob
      })
      .then((blob) => {
        const videoUrl = URL.createObjectURL(blob); // 创建 Blob URL
        setVideoRes(videoUrl); // 设置 videoSrc 状态变量
        console.log("blob:",videoUrl)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  //视频选择
  const [video, setVideo] = useState(null);

  const [videoSrc, setVideoSrc] = useState(null); // 用于存储video的blob url
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    console.log("file:",file)
    setVideo(file);
    const src = URL.createObjectURL(file);
    setVideoSrc(src);
    console.log("src:", src);
  
    // 创建一个 video 元素并设置其 src 属性
    const videoElement = document.createElement("video");
    videoElement.src = src;
  
    // 添加 onloadedmetadata 事件处理程序
    videoElement.onloadedmetadata = () => {
      const duration = videoElement.duration; // 获取视频长度（以秒为单位）
      console.log("Video duration:", duration);
  
      if (duration > 30) {
        alert("视频长度过长");
      }
    };
      // // Create FormData object and append the video file
      // const formData = new FormData();
      // formData.append("file", file);

      // try {
      //   // Send a POST request using fetch
      //   const response = await fetch("http://140.210.197.137:7781/upload", {
      //     method: "POST",
      //     body: formData,
      //   });

      //   // Check if the response is successful
      //   if (!response.ok) {
      //     throw new Error("Network response was not ok");
      //   }

      //   // Process the response data (modify according to your needs)
      //   const data = await response.json();
      //   console.log("Response data:", data);
      // } catch (error) {
      //   console.error("Error:", error);
      // }
  };
  const [userList, setUserList] = useState([]);

  return (
    <>
      <main className="container max-w-[1024px] mx-auto p-5 ">
        <div></div>
        <div
          className="container max-w-[512px] mx-auto"
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <hgroup>
            <h1 className="text-center text-5xl font-bold m-4">
              {pkg.appName}
            </h1>
            <p className="text-center text-xl opacity-60 m-4">
              {pkg.appSubtitle}
            </p>
          </hgroup>
          <div>
            <input type="file" accept="video/*" onChange={handleUpload} />
            <button onClick={handleButtonClick}>Send request</button>
            {isProcessing && (
              <div className="mt-4">
                <p>Loading... Please wait.</p>
              </div>
            )}
          </div>
          {/* 在这里添加 video 标签 */}
          <div className="mt-4">
            <video src={videoRes} controls width="100%" />
          </div>
        </div>
      </main>
    </>
  );
}
