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
          "y": 3,
          "w": 5,
          "h": 3,
          "i": "0",
          "content": "<b>DESIGN THINKING - AN IMPERATIVE</b>"
        },
         {
          "x": 5,
          "y": 6,
          "w": 3,
          "h": 7,
          "i": "1",
          "content": "<img style='width:80%;height:80%;object-fit:cover;' src='https://i.imgur.com/ZJ6yKEK.png'  />"
        },
        {
          "x": 5,
          "y": 0,
          "w": 3,
          "h": 6,
          "i": "2",
          "content": "<iframe width='450' height='260' style='border: 1px solid #cccccc;' src='https://thingspeak.com/channels/692115/charts/1?bgcolor=%23d9ff46&color=%23112b00&days=1&dynamic=true&results=10&type=line'></iframe>"
        },
      {
          "x": 0,
          "y": 0,
          "w": 3,
          "h": 3,
          "i": "3",
          "content": "<img style='width:80%;height:80%;object-fit:cover;' src='https://i.imgur.com/rmhvzo8.png'  />"
        },
        {
          "x": 3,
          "y": 0,
          "w": 2,
          "h": 3,
          "i": "4",
          "content": "<img style='width:80%;height:80%;object-fit:cover;' src='https://i.imgur.com/cdVmgrJ.png'  />"
        },
        {
          "x": 0,
          "y": 6,
          "w": 3,
          "h": 7,
          "i": "5",
          "content": "<img style='width:80%;height:80%;object-fit:cover;' src='https://i.imgur.com/L7jRRzs.png'  />"
          },
        {
          "x": 3,
          "y": 10,
          "w": 2,
          "h": 3,
          "i": "6",
          "content": "<img style='width:80%;height:80%;object-fit:cover;' src='https://i.imgur.com/W6uNymb.png'  />"
        },
        {
          "x": 3,
          "y": 6,
          "w": 2,
          "h": 4,
          "i": "7",
          "content": "<img style='width:80%;height:80%;object-fit:cover;' src='https://i.imgur.com/8nMAfy3.png'  />"
        },
        {
          "x": 0,
          "y": 13,
          "w": 4,
          "h": 6,
          "i": "8",
          "content": "<iframe style='width:80%;height:80%;object-fit:cover;' src='https://www.youtube.com/embed/_r0VX-aU_T8'></iframe>"
        },
        {
          "x": 4,
          "y": 13,
          "w": 4,
          "h": 6,
          "i": "9",
          "content": "image slider"
        }        
        ],
    }},
  
});
