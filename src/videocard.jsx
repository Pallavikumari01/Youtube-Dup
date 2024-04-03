const VideoCard=({info})=>{
 
  const {snippet,statistics}=info;
  const {channelTitle,thumbnails,title}=snippet;
  return(
   
      <div className="videobox">
    <img className="template" alt="oops" src={thumbnails.medium.url}/>
    
    <ul  >
      <li>{title}</li>
      <li>{channelTitle}</li>
      <li>{statistics.viewCount} viwes</li>
    </ul>

    </div>
  );
}
export default VideoCard;