import { Component } from '@angular/core';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent {

  trending= [
    {
      id :1,
      name :"Around the world",
      activity: "12 acitivities",
      discription: "Thế giới rộng lớn liệu rằng bạn có thể tìm được những người giống như bạn? Hãy thử tìm kiếm và tìm thấy những người bạn thân nhất của bạn.",
      status: "1k buyed",
      image: "data:image/jpeg;base64,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",
      pay: "$0.99",
    },
    {
      id :2,
      name :"Animal Lifestyle",
      activity: "12 acitivities",
      discription: "Động vật nào là động vật có thể sống ở nhiều nơi khác nhau? Hãy thử tìm kiếm và tìm thấy những người bạn thân nhất của bạn",
      status: "723 buyed",
      image: "https://images.theconversation.com/files/438138/original/file-20211216-25-1hu3e65.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
      pay: "$1.99",
    },
    {
      id :3,
      name :"World earth Science ",
      activity: "12 acitivities",
      discription: "Thế giới rộng lớn liệu rằng bạn có thể tìm được những người giống như bạn? Hãy thử tìm kiếm và tìm thấy những người bạn thân nhất của bạn.",
      status: "845 buyed",
      image: "https://static.scientificamerican.com/sciam/cache/file/FE64D7E4-84D4-4D35-BBC50FB1194BC045_source.jpg?w=590&h=800&F6BCDFD8-741C-4C77-90EBD9B908177DC5",
      pay: "$1.99",
    },
    {
      id :4,
      name :"Holidays in the world",
      activity: "12 acitivities",
      discription: "Du lịch thế giới rộng lớn và tìm kiếm những người bạn thân nhất của bạn. Hãy thử tìm kiếm và tìm thấy những người bạn thân nhất của bạn.",
      status: "2k buyed",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WxmRV0z3e90QMod-Jp9mYydyUuukHiS_7A&usqp=CAU",
      pay: "$2.99",
    },
    {
      id :5,
      name :"General Trivia",
      activity: "12 acitivities",
      discription: "Tư duy và tìm kiếm những người bạn thân nhất của bạn. Hãy thử tìm kiếm và tìm thấy những người bạn thân nhất của bạn.",
      status: "2k buyed",
      image: "https://www.weeklyquiz.co.uk/wp-content/uploads/2018/01/images.png",
      pay: "$2.99",
    },
    {
      id :6,
      name :"Color-Food-Health",
      activity: "12 acitivities",
      discription: "Du lịch thế giới rộng lớn và tìm kiếm những người bạn thân nhất của bạn. Hãy thử tìm kiếm và tìm thấy những người bạn thân nhất của bạn.",
      status: "2k buyed",
      image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/5/8/0/HE_colorful-produce-thinkstock_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382543268465.jpeg",
      pay: "$2.99",
    },
  ]
  Eng= [
    {
      id :1,
      name :"English and Grammar",
      activity: "12 acitivities",
      discription: "Thế giới rộng lớn liệu rằng bạn có thể tìm được những người giống như bạn? Hãy thử tìm kiếm và tìm thấy những người bạn thân nhất của bạn.",
      status: "1k buyed",
      image: "https://www.learningexplorer.org/wp-content/uploads/2019/04/5-easy-ways-you-can-pick-up-the-english-language.jpg",
      pay: "$0.99",
    },
    {
      id :2,
      name :"Basic English",
      activity: "12 acitivities",
      discription: "Động vật nào là động vật có thể sống ở nhiều nơi khác nhau? Hãy thử tìm kiếm và tìm thấy những người bạn thân nhất của bạn",
      status: "723 buyed",
      image: "https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2019/07/18171823/ESL_750x500.jpg",
      pay: "$1.99",
    },
    {
      id :3,
      name :"English step by step ",
      activity: "12 acitivities",
      discription: "Thế giới rộng lớn liệu rằng bạn có thể tìm được những người giống như bạn? Hãy thử tìm kiếm và tìm thấy những người bạn thân nhất của bạn.",
      status: "845 buyed",
      image: "https://play-lh.googleusercontent.com/ua4n3IdS75qg_3zlFPHjnIZaVhXwR-kvULxW5oZDrUTFXdi-3unst4FuE0ac77ECnA",
      pay: "$1.99",
    },
    {
      id :4,
      name :"Popular topics",
      activity: "12 acitivities",
      discription: "Du lịch thế giới rộng lớn và tìm kiếm những người bạn thân nhất của bạn. Hãy thử tìm kiếm và tìm thấy những người bạn thân nhất của bạn.",
      status: "2k buyed",
      image: "https://fluencycorp.com/wp-content/uploads/2019/01/hardest-part-learning-english.jpg",
      pay: "$2.99",
    },
    {
      id :5,
      name :"English speaking",
      activity: "12 acitivities",
      discription: "Tư duy và tìm kiếm những người bạn thân nhất của bạn. Hãy thử tìm kiếm và tìm thấy những người bạn thân nhất của bạn.",
      status: "2k buyed",
      image: "http://nie-images.s3.amazonaws.com/gall_content/2016/11/2016_11$largeimg01_Nov_2016_115919720.jpg",
      pay: "$2.99",
    },
    {
      id :6,
      name :"Speaking Test",
      activity: "12 acitivities",
      discription: "Du lịch thế giới rộng lớn và tìm kiếm những người bạn thân nhất của bạn. Hãy thử tìm kiếm và tìm thấy những người bạn thân nhất của bạn.",
      status: "2k buyed",
      image: "https://images.theconversation.com/files/152450/original/image-20170111-4553-19wybfu.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop",
      pay: "$2.99",
    },
  ]

//   let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

//   function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {slideIndex = 1}    
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//     }
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";  
//     dots[slideIndex-1].className += " active";
//   }
}
