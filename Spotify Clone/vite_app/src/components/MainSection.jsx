function MainSection() {
  const data1 = [
    { id: 1, img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/Liked.png?raw=true", text: 'Liked Songs' },
    { id: 2, img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image4.png?raw=true", text: 'Neffex Playlist' },
    { id: 3, img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image3.png?raw=true", text: 'K/DA' },
    { id: 4, img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image1.png?raw=true", text: 'Liked Songs' },
    { id: 5, img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image2.png?raw=true", text: 'Dance/ Electronic Mix' }
  ]

  const data2 = [
    { id: 1, img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image9.png?raw=true", text: 'Weekly Motivat...' },
    { id: 2, img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image8.png?raw=true", text: 'MEDITATION SELF' },
    { id: 3, img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image7.png?raw=true", text: 'Words Beyond act...' },
    { id: 4, img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image6.png?raw=true", text: 'The Alexa Show' },
    { id: 5, img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image5.png?raw=true", text: 'The Stories Of Ma...' },
    { id: 5, img_url: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/image10.png?raw=true", text: 'Motivation daily b...' }
  ]
  return (
    <>
      <div className="right">
        <div className="top">
          <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/top%20arrow%20navigation.png?raw=true" alt="" className="yu" />
          <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/10.spotify-clone/assets/User.png?raw=true" alt="" className="yt" />
        </div>


        <div className="section1">
          <h1>Good Morning</h1>

          <div className="con1">
            {data1.map((i, id) => (

              <div className="box1">
                <img src={i.img_url} alt="" />
                <p>{i.text}</p>
              </div>
            ))}
          </div>
        </div>



        <div className="section2">
          <h3>Shows you might like</h3>

          <div className="scrol">
            {data2.map((i, id) => (

              <div className="box2">
                <img src={i.img_url} alt="" />
                <p>{i.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}

export default MainSection