//js//

var GridLayout = VueGridLayout.GridLayout;
var GridItem = VueGridLayout.GridItem;
var app = new Vue({
  el: '#pt',
  components: {
    GridLayout,
    GridItem,
  },
  data: function() {
    return {
      layout: [
      {
          "x": 0,
          "y": 6,
          "w": 2,
          "h": 2,
          "i": "1",
          "label":"",
          "content": "<b>DESIGN THINKING - AN IMPERATIVE</b>"
        },
         {
          "x": 4,
          "y": 22,
          "w": 3,
          "h": 5,
          "i": "2",
          "label":"",
          "content": "<img style='width:80%;height:80%;object-fit:cover;' src='https://i.imgur.com/ZJ6yKEK.png'  />"
        },
        {
          "x": 4,
          "y": 0,
          "w": 4,
          "h": 6,
          "i": "3",
          "label":"Real-time Inputs",
          "content": "<iframe width='450' height='260' style='border: 1px solid #cccccc;' src='https://thingspeak.com/channels/692115/charts/1?bgcolor=%23d9ff46&color=%23112b00&days=1&dynamic=true&results=10&type=line'></iframe>"
        },
      {
          "x": 0,
          "y": 0,
          "w": 2,
          "h": 6,
          "i": "4",
          "label":"Why Design Thinking",
          "content": "<img style='width:80%;height:80%;object-fit:cover;' src='https://i.imgur.com/rmhvzo8.png'  />"
        },
        {
          "x": 2,
          "y": 0,
          "w": 2,
          "h": 8,
          "i": "5",
          "label":"Human Centered",
          "content": "<img style='width:80%;height:80%;object-fit:cover;' src='https://i.imgur.com/cdVmgrJ.png'  />"
        },
        {
          "x": 4,
          "y": 12,
          "w": 4,
          "h": 10,
          "i": "6",
          "label":"Steps",
          "content": "<img style='width:80%;height:80%;object-fit:cover;' src='https://i.imgur.com/L7jRRzs.png'  />"
          },
        {
          "x": 0,
          "y": 20,
          "w": 4,
          "h": 7,
          "i": "7",
          "label":"DT in STEM",
          "content": "<img style='width:80%;height:80%;object-fit:cover;' src='https://i.imgur.com/FTKNHLX.png'  />"
        },
        {
          "x": 4,
          "y": 6,
          "w": 4,
          "h": 6,
          "i": "8",
          "label":"A Well-Known Outcome",
          "content": "<img style='width:80%;height:80%;object-fit:cover;' src='https://i.imgur.com/8nMAfy3.png'  />"
        },
        {
          "x": 0,
          "y": 14,
          "w": 4,
          "h": 6,
          "i": "9",
          "label":"Process",
          "content": "<iframe style='width:80%;height:80%;object-fit:cover;' src='https://www.youtube.com/embed/_r0VX-aU_T8'></iframe>"
        },
        {
          "x": 0,
          "y": 8,
          "w": 4,
          "h": 6,
          "i": "10",
          "label":"",
          "content": "..Image Slider.."
        }        
        ],
    }},
  
});
