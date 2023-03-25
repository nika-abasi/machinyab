import React, { useEffect, useState } from "react";
import "./Search.css";
import { useParams } from "react-router-dom";
import SectionHeader from "../../component/SectionHeader/SeactionHeader";
import CourseBox from "../../component/CourseBox/CourseBox";
import ArticleBox from "../../component/ArticleBox/ArticleBox";
import Header from "./../../component/Header/Header.js";
import Breadcrumb from "../../component/Breadcrumb/Breadcrumb";
import Footer from "./../../component/Footer/Footer";
import MainHeader  from "./../../component/MainHeader/MainHeader";
import Topbar from "./../../component/Topbar/Topbar"
import Navbar from "./../../component/Navbar/Navbar"

export default function Search() {
  const [courses, setCourses] = useState([]);
  const [articles, setArticles] = useState([]);
  const { value } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/v1/search/${value}`)
      .then((res) => res.json())
      .then((allData) => {
        console.log(allData);
        setArticles(allData.allResultArticles);
        setCourses(allData.allResultCourses);
      });
  }, []);
console.log("value",value);
  return (
    <>
     
      
      <div className="search-main-container">
       <Topbar />
       <MainHeader />
       <Navbar/>
      </div>
       
          
            
    <div className="breadcrumb-container">
      <Breadcrumb />
    </div>
     
    <div className="page-main">
      <div className="courses">
        <div className="container">
          {/* <SectionHeader
            title="نتیجه  برای جستجوی شما"
            
          /> */}
          <div className="courses-content">
            <div className="container">
              <div className="row">
                {courses.length === 0 ? (
                  <div className="alert alert-warning">
                     "نتیجه  برای جستجوی شما"  </div>
                ) : (
                  <>
                    {courses.map((course) => (
                      <CourseBox key={course._id} {...course} />
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="courses">
        <div className="container">
          {/* <SectionHeader
            title="نتیجه مقالات برای جستجوی شما"
            desc="پیش به سوی ارتقای دانش"
          /> */}
          <div className="articles__content">
            <div className="row">
              {articles.length === 0 ? (
                <div >
                  «نتیجه ای** برای جستجوی شما وجود ندارد 
                </div>
              ) : (
                <>
                  {articles.map((article) => (
                    <ArticleBox {...article} key={article._id} />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="category-footer">
        <Footer />
      </div>
    </>
  );
}
