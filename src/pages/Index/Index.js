import React, { useRef, useState,useEffect } from "react";
import "./Index.css";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import { MdAssistant } from "react-icons/md";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import TopSlider from "../../component/Slider/TopSlider";
import { BsFillSuitDiamondFill } from "react-icons/bs";
import Divider from "@mui/material/Divider";
import CategoryCard from "../../component/CatergoryCard/CategoryCard";
import ProductListTable from "../../component/ProductListTable/ProductListTable";
import FeatureProducts from "./../../component/FeaturedProducts/FeaturedProducts";


export default function Index({ props }) {

  const [articles, setArticles] = useState([]);
  const[courses,setCourses]=useState([]);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  useEffect(() => {
    fetch(`http://localhost:4000/v1/articles`)
    .then((res)=>res.json())
    .then((allCategories)=>{
      setArticles(allCategories)
    })
  }, [])

  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses`)
    .then((res)=>res.json())
    .then((allCourses)=>{
      setCourses(allCourses)
    })
  }, [])



  // console.log('industries',articles);
  // console.log("courses",courses);
  return (
    <>
      <h1>has been modified </h1>
      <div className="main-row">
        <Header />
      </div>
      <div className="index-content-container">
        <div className="main-row">
          <Col>
            <TopSlider />
          </Col>
        </div>
        <section className="body-content">
          <div className="main-row ">
            <Typography component={'span'} variant="body2">
              <Divider
                textAlign="left"
                style={{ color: "#EBAE1F", marginTop: 20, marginBottom: 20 }}
              >
                <BsFillSuitDiamondFill
                  style={{ color: "#EBAE1F", fontSize: 20 }}
                />
                &nbsp;اطلاعات
              </Divider>
            </Typography>
          </div>
          <div className="main-row info-row">
            <Col xs={3} >
              <Card sx={{ minWidth: 310, textAlign: "justify" }}>
                <CardContent>
                  <Typography variant="h5" component={'span'}>
                    <img src="/images/us.svg" alt="" className="info-logo" />
                    &nbsp;&nbsp;نام شرکت
                  </Typography>
                  <br />
                  <Typography variant="body2" component={'span'}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dignissimos, consequuntur similique asperiores, quam debitis
                    dolorem eius alias nihil, in veniam quo aut vel. Impedit
                    explicabo quaerat dicta delectus ut esse.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
              </Card>
            </Col>
            <Col xs={3}>
              <Card sx={{ minWidth: 310, textAlign: "justify" }}>
                <CardContent>
                  <Typography variant="h5" component={'span'}>
                    <MdAssistant style={{ color: "#EBAE1F" }} />
                    &nbsp;&nbsp;مشاوره تخصصی 
                  </Typography>
                  <br />
                  <Typography variant="body2" component={'span'}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dignissimos, consequuntur similique asperiores, quam debitis
                    dolorem eius alias nihil, in veniam quo aut vel. Impedit
                    explicabo quaerat dicta delectus ut esse.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
              </Card>
            </Col>
            <Col xs={3}>
              <Card sx={{ minWidth: 310, textAlign: "justify" }}>
                <CardContent>
                  <Typography variant="h5" component={'span'}>
                    <WorkspacePremiumIcon style={{ color: "#EBAE1F" }} />
                    &nbsp;&nbsp;تضمین فنی
                  </Typography>
                  <br />
                  <Typography variant="body2" component={'span'}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dignissimos, consequuntur similique asperiores, quam debitis
                    dolorem eius alias nihil, in veniam quo aut vel. Impedit
                    explicabo quaerat dicta delectus ut esse.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
              </Card>
            </Col>
          </div>
          <div className="main-row">
            <Typography variant="body2" component={'span'}>
              <Divider
                textAlign="left"
                style={{ color: "#EBAE1F", marginTop: 20, marginBottom: 20 }}
              >
                <BsFillSuitDiamondFill
                  style={{ color: "#EBAE1F", fontSize: 20 }}
                />
                &nbsp;انتخاب بر اساس دسته بندی صنایع
              </Divider>
            </Typography>
          </div>
          <Row xs={6}>
            {articles.slice(1,9).map((card)=>(
              <CategoryCard alt={""} height={"110"} image="/images/test3.jfif"  title={card.title} description={card.description} key={card._id}/>
            ))}
           
          </Row>

          <Row>
            <ProductListTable />
          </Row>
          <div className="main-row">
            <Col>
              <Typography variant="body2" component={'span'}>
                <Divider
                  textAlign="left"
                  style={{ color: "#EBAE1F", marginTop: 20, marginBottom: 20 }}
                >
                  <BsFillSuitDiamondFill
                    style={{ color: "#EBAE1F", fontSize: 20 }}
                  />
                  &nbsp; محصولات ویژه
                </Divider>
              </Typography>
              <FeatureProducts />
            </Col >
          </div>
        </section>
      </div>
      <div className="last-row">
        <Footer />
      </div>
      
      
     
    </>
  );
}
