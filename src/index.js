import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from 'react-grid-gallery';
import './index.css';
import myData from './tempData.json';
  
  class Game extends React.Component {
    constructor(props) {
      super(props);

      const images = []
      const result = myData;

      const resultDict = result["emotes"];
      // var lst = [];
      resultDict.forEach((item, index) => {
        images.push({
          "src": item[2],
          "thumbnail": item[2],
          thumbnailWidth: 75,
          thumbnailHeight: 75,
          tags: [{value: item[1], title: item[1]}]
        })
        // lst.push(<img src={item[2]} alt={item[1]} width="72" height="72"></img>)
      });

      images.sort(function(x, y) {
        if (x['tags'][0]['value'] < y['tags'][0]['value']) {
          return -1;
        } else {
          return 1;
        }
      });

      this.state = {
        emoteList: result,
        list: images,
      };
    }

    getEmoteList() {
      

      // this.setState ({
      //   emoteList: result,
      //   list: lst
      // });

      // const apiUrl = 'http://10.0.1.15:5000/'
      // fetch(apiUrl)
      //   .then(res => res.json())
      //   .then(
      //     (result) => {
      //       var lst = []
      //       const resultDict = result["emotes"];
      //       resultDict.forEach((item, index) => {
      //       lst.push(<img src={item[2]} alt={item[1]} width="72" height="72"></img>)
      //       })

      //       this.setState ({
      //         emoteList: result,
      //         list: lst
      //       });
      //     },
      //     (error) => {
      //       console.log(error)
      //     }
      //   );
    }

    getEmoteDict() {
      if (this.state.emoteList) {
        return this.state.emoteList["emotes"];
      } else {
        return [];
      }
    }

    getInfoURL() {
      if (this.state.emoteList) {
        return this.state.emoteList["emotes"][105][2];
      } else {
        return "TEST!!";
      }
    }

    getInfoName(index) {
      if (this.state.emoteList) {
        return this.state.emoteList["emotes"][index][1];
      } else {
        return "TEST!!";
      }
    }

    render() {
      console.log(this.state.lst);
      return (
        <div style={{
          display: "block",
          minHeight: "1px",
          width: "100%",
          border: "1px solid #ddd",
          overflow: "auto"
        }}>
          <Gallery 
            images={this.state.list}
            enableImageSelection={false} 
            rowHeight={100}
            />
        </div>
      )
    }

    // render() {
    //   return (
    //     <div className="game">
    //         <ul>
    //           {
    //             this.state.list.map((item, index) => <li key={index}>{item} {this.getInfoName(index)}</li>)
    //           }
    //         </ul>
    //     </div>
    //   );
    // }
  }

  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );