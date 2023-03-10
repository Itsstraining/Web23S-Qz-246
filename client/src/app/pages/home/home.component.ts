import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public authService:AuthService){}

  taskquizMath= [
    {
      id :1,
      name :"Multiplication table 2",
      discription: "12 slides",
      status: "8k played",
      image: "https://i.ytimg.com/vi/msLg8R13WYQ/hqdefault.jpg"
    },
    {
      id :2,
      name :"Logic",
      discription: "10 slides",
      status: " 784 played",
      image: "https://i1-vnexpress.vnecdn.net/2019/11/26/1Q-5198-1574765351.png?w=0&h=0&q=100&dpr=2&fit=crop&s=QNLC74ocMl-3LITe5T85GA"
    },
    {
      id :3,
      name :"Math review",
      discription: "19 slides",
      status: "242k played",
      image: "https://quizizz.com/media/resource/gs/quizizz-media/quizzes/30ded302-4345-46bf-b03c-28f30802508c"
    },
    {
      id :4,
      name :"Tính giới hạn hàm số",
      discription: "12 slides",
      status: "8k played",
      image: "https://i.ytimg.com/vi/7Karp8-ZOac/maxresdefault.jpg"
    },
    // {
    //   id :5,
    //   name :"Ôn tập lớp 4",
    //   discription: "12 slides",
    //   status: "8k played",
    //   image: "https://news.mit.edu/sites/default/files/images/202208/MIT-MathProblemSolver-01-press.jpg"
    // },
    // {
    //   id :6,
    //   name :"Luyện tập cấp số cộng",
    //   discription: "12 slides",
    //   status: "8k played",
    //   image: "http://vgbc.org.vn/wp-content/uploads/2021/11/cap-so-cong.png?v=1637028224"
    // },
    // {
    //   id :7,
    //   name :"Giới hạn hàm số vô định",
    //   discription: "12 slides",
    //   status: "120 played",
    //   image: "https://i.ytimg.com/vi/Gzze6Db-IZ0/maxresdefault.jpg"
    // },
    // {
    //   id :8,
    //   name :"Đồ thị hàm số",
    //   discription: "15 slides",
    //   status: "600 played",
    //   image: "https://lessonopoly.org/wp-content/uploads/2021/02/do-thi-ham-so-01.jpg"
    // },

  ]
  taskquizEnglish= [
    {
      id :1,
      name :"Household chores",
      discription: "12 slides",
      status: "1k played",
      image: "https://thumbs.dreamstime.com/b/house-chores-set-housewife-doing-house-work-house-chores-set-housewife-doing-house-work-home-isolated-woman-ironing-clothes-186910088.jpg"
    },
    {
      id :2,
      name :"Further education",
      discription: "10 slides",
      status: " 784 played",
      image: "https://i0.wp.com/www.theenglishbureau.com/wp-content/uploads/2019/10/future-2372183_1920.jpg?fit=1920%2C1281&ssl=1"
    },
    {
      id :3,
      name :"Present simples",
      discription: "19 slides",
      status: "242k played",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrug2Qhads0VmNOixgCPsK96DvHj5CbXrClA&usqp=CAU"
    },
    {
      id :4,
      name :"Present continuous",
      discription: "12 slides",
      status: "8k played",
      image: "https://topicanative.edu.vn/wp-content/uploads/2019/11/thi-hien-tai-tiep-dien-topica-native.jpg"
    },
    // {
    //   id :5,
    //   name :"Business tour",
    //   discription: "12 slides",
    //   status: "8k played",
    //   image: "https://o.rada.vn/data/image/2021/05/17/cai-dat-Business-Tour-7.jpg "
    // },
    // {
    //   id :6,
    //   name :"Personality traits",
    //   discription: "12 slides",
    //   status: "8k played",
    //   image: "https://i0.wp.com/www.iedunote.com/img/20091/personality-traits.png?fit=1280%2C720&quality=100&ssl=1"
    // },
    // {
    //   id :7,
    //   name :"English song",
    //   discription: "12 slides",
    //   status: "120 played",
    //   image: "https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTg1ODQ2NjYxNzQ0OTYwNjQx/popular-english-songs-top-300-best-songs-of-all-time.png"
    // },
    // {
    //   id :8,
    //   name :"Listening",
    //   discription: "15 slides",
    //   status: "600 played",
    //   image: "https://ieltsplanet.info/wp-content/uploads/2017/04/listening-1200x900.jpg"
    // },

  ]
  taskquizScience= [
    {
      id :1,
      name :"Civil war review",
      discription: "12 slides",
      status: "1k played",
      image: "https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTk1MjA3MjAxNzg1MTI4MTM1/civil-war-gettyimages-3427284.jpg"
    },
    {
      id :2,
      name :"Dinosaur",
      discription: "10 slides",
      status: " 784 played",
      image: "https://cdn.britannica.com/50/8050-050-D930CD43/Mesozoic-Era-Age-of-Dinosaurs-periods-dinosaurs.jpg"
    },
    {
      id :3,
      name :"Nền văn minh thời kì trung cổ phần 1",
      discription: "19 slides",
      status: "242k played",
      image: "https://cdn.britannica.com/06/122506-050-C8E03A8A/Pyramid-of-Khafre-Giza-Egypt.jpg"
    },
    {
      id :4,
      name :"Nền văn minh thời kì trung cổ phần 2",
      discription: "12 slides",
      status: "8k played",
      image: "https://dhtravel.com.vn/upload/product/shutterstockrf1456340747-3358.jpg"
    },
    // {
    //   id :5,
    //   name :"Content and Ocean",
    //   discription: "12 slides",
    //   status: "8k played",
    //   image: "https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg "
    // },
    // {
    //   id :6,
    //   name :"Ocean and Island",
    //   discription: "12 slides",
    //   status: "8k played",
    //   image: "https://www.deeperblue.com/wp-content/uploads/2022/12/Island-AdobeStock_346974206-scaled.jpeg"
    // },
    // {
    //   id :7,
    //   name :"Sky and Cloud",
    //   discription: "12 slides",
    //   status: "120 played",
    //   image: "https://www.adorama.com/alc/wp-content/uploads/2017/11/shutterstock_114802408.jpg"
    // },
    // {
    //   id :8,
    //   name :"Tư tưởng Hồ Chí Minh",
    //   discription: "15 slides",
    //   status: "600 played",
    //   image: "data:image/jpeg;base64,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"
    // },

  ]
}
