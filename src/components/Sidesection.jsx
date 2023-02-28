import "./Ui.scss";
export default function Sidesection() {
  return (
    <div className="sidedpre">
      <div className="sided">
        <div className="sidecalender">
        <span style={{fontWeight:'700',marginLeft:'3em',position:'absolute' ,marginTop:'2em'}}>October 2022</span>
        <pre><span style={{marginTop:'5em',position:'absolute',marginLeft:'2em',fontWeight:'600',opacity:'0.4',fontSize:'1.2em'}}>S       M       T       W  </span></pre>
        <pre><span style={{position:'absolute',marginLeft:'2.5em',marginTop:'10em'}}>4         5         6         7<br/><br/>
        </span>
        <span style={{position:'absolute',marginTop:'13em',marginLeft:'2.5em'}}>
        11        12        13        14
        </span>
        <span style={{position:'absolute',marginLeft:'2.5em',marginTop:'16em'}}>
       <span style={{backgroundColor:'blue',borderRadius:'50%',color:'white',height:'1.4em',width:'1.5em',position:'absolute',textAlign:'center'}}>18</span>        19           20        21</span> 
        </pre>
        </div>
        <div className="sideintro">
          <div>
            <span style={{color:'skyblue',fontSize:'0.7em'}}>🕒 March20th</span>
          </div>
          <span
            style={{
              color: "white",
              fontSize: "1.3em",
              fontWeight: "700",
              marginLeft: "1em",
              position: "absolute",
              marginTop: "3em",
            }}
          >
            Check the docs for getting every
            <br /> component API
          </span>
          <img
            src="data:image/jpeg;base64,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"
            style={{
              height: "4em",
              width: "5em",
              marginTop: "12em",
              marginLeft: "1.5em",
              borderRadius: "9px",
            }}
          />
          <span
            style={{
              marginTop: "12em",
              position: "absolute",
              marginLeft: "1em",
              color: "skyblue",
            }}
          >
            Assigned to
          </span>
          <br />
          <span
            style={{
              position: "absolute",
              marginLeft: "7.5em",
              marginTop: "-2.4em",
              color: "white",
              fontWeight: "500",
            }}
          >
            Michael Scott
          </span>
          <div
            style={{
              position: "absolute",
              height: "4px",
              width: "20em",
              backgroundColor: "darkblue",
              marginTop: "3em",
              marginLeft: "2em",
            }}
          >
            <div
              style={{
                height: "4px",
                width: "12em",
                backgroundColor: "white",
                maginTop: "3em",
                marginLeft: "0.01em",
              }}
            ></div>
          </div>
          <span
            style={{
              marginLeft: "30em",
              position: "absolute",
              marginTop: "3.4sem",
              fontSize: "12px",
              color: "white",
            }}
          >
            60%
          </span>
        </div>
        <div className="sideday" >
        <span style={{marginTop:'1em',marginLeft:'1em',position:'absolute',color:'white',fontWeight:'500',textDecoration:'underline'}}>Yesterday</span>
        <span style={{position:'absolute',marginLeft:'13em',marginTop:'1em',color:'white'}}>Today</span>
        </div>
        <div className="sidemusic">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQHpakMSCNnApw/profile-displayphoto-shrink_800_800/0/1664032611290?e=1672876800&v=beta&t=TVR6vhDQgyD4idUh6D1cExDu6QhP2hhn0QfWyQHFjIA"
            style={{ height: "9em", width: "9em" }}
          />
          <span
            style={{
              marginTop: "0.5em",
              position: "absolute",
              marginLeft: "1em",
              fontWeight: "700",
              fontSize: "1.1em",
            }}
          >
            Utraviolet
          </span>
          <br />
          <span
            style={{
              position: "absolute",
              marginLeft: "10em",
              marginTop: "-7em",
              fontWeight: "500",
              opacity: "0.7",
            }}
          >
            Basement.Beside Myself
          </span>
          <div style={{ cursor:'pointer',marginLeft: "12em", marginTop: "-4em" }}>
            <span>⏪</span>
            <span>▶️</span>
            <span>⏩</span>
          </div>
        </div>
      </div>
    </div>
  );
}
