import React, { useState, useEffect, useCallback } from "react";
import Pagination from "./../Pagination/Pagination";
import "./ProductsDetail.css";
import ListGrid from "./../ProductViewBar/ListGrid";
import ProductList from "./../ProductsDetail/ProductList";
import SideBarFilter from "./../ProductsSideBarFilter/SideBarFilter";
import ProductListFiltered from "./ProductsListFiltered";
import CompareProducts from "./../../pages/CompareProducts/CompareProducts";
import AuthContext from "./../Context/AuthContext";

// const BRANDS = ["اسپرینت", "Bamuler", "اناهیتا", "فلوکی"];
// const CATEGORY = ["AC", "DC"];
// const ProductsData = [
//   {
//     id: 1,
//     productCode: "El1401200",
//     productTitle: "Transmitter",
//     TagNo: "SE4155",
//     manufacturer: "Bamuler",
//     productTechnicalInfo: "powe2000 -pressure20",
//     status: "not available",
//     deliveryTime: "3weeks",
//     availableQty: 3,
//     price: 2000,
//     subIndusry: "oil & gas",
//     classification: "instrument",
//     productCondition: "used",
//     soled: 0,
//     Category: "AC",
//   },
//   {
//     id: 2,
//     productCode: "El1401200",
//     productTitle: "Azobin",
//     TagNo: "SE4155",
//     manufacturer: "Bamuler",
//     productTechnicalInfo: "powe2000 -pressure20",
//     status: "available",
//     deliveryTime: "3weeks",
//     availableQty: 13,
//     price: 200,
//     subIndusry: "oil & gas",
//     classification: "instrument",
//     productCondition: "new",
//     soled: 0,
//     Category: "AC",
//   },
//   {
//     id: 3,
//     productCode: "Gl1401200",
//     productTitle: "فلوکی",
//     TagNo: "gE4155",
//     manufacturer: "اناهیتا",
//     productTechnicalInfo: "Gowe2000 -pressure20",
//     status: "available",
//     deliveryTime: "1weeks",
//     availableQty: 1,
//     price: 0,
//     subIndusry: "Agriculture",
//     classification: "tools",
//     productCondition: "new",
//     soled: 0,
//     Category: "DC",
//   },

//   {
//     id: 4,
//     productCode: "El1401200",
//     productTitle: "pressure meter",
//     TagNo: "f4155",
//     manufacturer: "اناهیتا",
//     productTechnicalInfo: "fwe2000 -pressure20",
//     status: "not available",
//     deliveryTime: "2weeks",
//     availableQty: 0,
//     price: 20000,
//     subIndusry: "mtal",
//     classification: "instrument",
//     productCondition: "used",
//     soled: 1,
//     Category: "DC",
//   },
//   {
//     id: 5,
//     productCode: "Gl1401200",
//     productTitle: "اسپرینت",
//     TagNo: "gE4155",
//     manufacturer: "اسپرینت",
//     productTechnicalInfo: "Gowe2000 -pressure20",
//     status: "available",
//     deliveryTime: "1weeks",
//     availableQty: 1,
//     price: 50000,
//     subIndusry: "Agriculture",
//     classification: "tools",
//     productCondition: "New",
//     soled: 0,
//     Category: "AC",
//   },
// ];


// console.log(dataProducts);
export default function ProductsDetail() {
  const [orderedCourses, setOrderedCourses] = useState([]);
  const [showList, setShowList] = useState(false);
  const [currentView, setCurrentView] = useState("list");
  const isDetailedView = currentView === "list";
  const [products, setProducts] = useState([]);
  const [statusTitle, setStatusTitle] = useState("مرتب سازی بر اساس ");
  const [shownCourses, setShownCourses] = useState([]);
  const [minValue, setMinValue] = useState(25);
  const [maxValue, setMaxValue] = useState(75);
  const [condition, setCondition] = useState("default");
  const [sideBarChecked, setSideBarChecked] = useState(false);
  const [newCompareList, setNewCompareList] = useState([]);
  const[ProductsData,setProductsData]=useState([]);


  /*get all brands*/
  useEffect(() => {
    fetch(`http://localhost:4000/v1/courses`)
      .then((res) => res.json())
      .then((products) => setProductsData(products));
     
  }, []);
  //  console.log("brand",ProductsData);
  
   
   
  // console.log("newCompareList",newCompareList);

  /*brand quantity filter*/
  let brand = ProductsData.map(({ manufacturer }) => manufacturer);
  const allBrands =[...new Set(brand)]
// console.log(allBrands);
  let filteredBrands = [];
  allBrands.forEach((item) => {
    let newArr = brand.filter((el) => el.toLowerCase() === item.toLowerCase());
    filteredBrands.push(newArr);
  });

  // console.log("nn",filteredBrands);
  /*category quantity filter*/
  let catResult = ProductsData.map(({ category }) => category);
   const allCategories =[...new Set(catResult)]
// console.log("cat",allCategories);
  let filteredCategories = [];
  allCategories.forEach((item) => {
    let catArr = catResult.filter(
      (el) => el.toLowerCase() === item.toLowerCase()
    );
    filteredCategories.push(catArr);
  });

  useEffect(() => {
    setCurrentView("list");
    asumptionProductOrderHandler();
  }, []);

  ////////////////////asumptionProductOrderHandler////////////////////
  const asumptionProductOrderHandler = () => {
    const sortedIdProducts = [...ProductsData].sort((a, b) => a.id - b.id);
    setProducts(sortedIdProducts);
    // console.log("sorted",sortedIdProducts);
  };
  //////////////////////////////////handleAlignment/////////////////////
  const handleAlignment = (event, newAlignment) => {
    setCurrentView(newAlignment);

    event.currentTarget.style.background = "white";
  };
  ////////////////////////////////////////////openListHandler///////////////
  const openListHandler = (event) => {
    setShowList((current) => !current);
    // console.log(showList);
  };
  ///////titleSortHandler//////////////////////////////////////////////
  const titleSortHandler = () => {
    const sortedTitle = [...ProductsData].sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase())
        return -1;
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
    });
    setProducts(sortedTitle);
    //  console.log("sort:",sortedTitle);
  };
  /////////////////////////////////////////////newProductsSortHandler/////////////
  const newProductsSortHandler = () => {
    const filteredNewProducts = [...ProductsData]
      .filter((product) => product.partStatus.toLowerCase() === "نو")
      .sort((a, b) => a.name.localeCompare(b.name));

    setProducts(filteredNewProducts);
    // console.log(filteredNewProducts);
  };
  ////////////////////usedProductsSortHandler/////////////////////
  const usedProductsSortHandler = () => {
    const filteredUsedProducts = [...ProductsData]
      .filter((product) => product.partStatus.toLowerCase() === "کارکرده")
      .sort((a, b) => a.name.localeCompare(b.name));

    setProducts(filteredUsedProducts);
    // console.log(filteredUsedProducts);
  };
  ////////////////////////////////////sortedPriceHandler///////////////////
  const sortedPriceHandler = () => {
    const sortedPrice = [...ProductsData].sort((a, b) => a.price - b.price);

    setProducts(sortedPrice);
    // console.log("price", products);
  };
  /////////////////////////////////////////////availableProductsSortHandler////////
  const availableProductsSortHandler = () => {
    const filteredAvailableProducts = [...ProductsData]
       
      .filter((product) => product.stockQty > 0)
      .sort((a, b) => a.name.localeCompare(b.name));

    setProducts(filteredAvailableProducts);
    // console.log(filteredAvailableProducts);
  };
  /////////////////brandSortHandler/////////////////////////
  const brandSortHandler = () => {
    const sortedByBrand = [...ProductsData].sort((a, b) => {
      if (a.manufacturer.toLowerCase() < b.manufacturer.toLowerCase())
        return -1;
      if (a.manufacturer.toLowerCase() > b.manufacturer.toLowerCase()) return 1;
      return 0;
    });
    setProducts(sortedByBrand);
    // console.log('brand',sideBarChecked);
    // console.log(sortedByBrand);
  };
  /////////////////////////////////////maxSoledProductsHandler/////////////////
  const maxSoledProductsHandler = () => {
    const maxSoled = [...ProductsData].sort((a, b) => b.soled - a.soled);
    setProducts(maxSoled);
    // console.log(maxSoled);
  };
  ////////////////////////////////////////newRangeHandler///////////////////
  const newRangeHandler = (e) => {
    const priceRange = [...ProductsData].filter(
      (product) => product.price >= minValue && product.price <= maxValue
    );
    setSideBarChecked(false);
    setProducts(priceRange);
    // console.log('range',sideBarChecked);
  };

  const [state, setState] = useState({
    filters: new Set(),
    products: ProductsData,
  });
  /////////////////////////////////////////andleFilterChange////////////////////
  const handleFilterChange = useCallback(
    (event) => {
      setSideBarChecked(true);
      // console.log("s",sideBarChecked);
      setState((previousState) => {
        let filters = new Set(previousState.filters);
        let products = ProductsData;
        // console.log("filter", filters,"p",products);
        if (event.target.checked) {
          filters.add(event.target.value);
        } else {
          filters.delete(event.target.value);
        }
        if (filters.size) {
          products = products.filter((product) => {
            return filters.has(product.manufacturer);
          });

          //     setQuantity(state.products.length)
          //  console.log("f", state.products.length, sideBarChecked);
        }

        return {
          filters,
          products,
        };
      });
    },
    [setState]
  );
  ////////////////////////handleMotorCatg//////////////////////////////
  const handleMotorCatg = useCallback(
    (event) => {
      setSideBarChecked(true);
      // console.log("s",sideBarChecked);
      setState((previousState) => {
        let filters = new Set(previousState.filters);
        let products = ProductsData;
        // console.log("filter", filters,"p",products);
        if (event.target.checked) {
          filters.add(event.target.value);
        } else {
          filters.delete(event.target.value);
        }
        if (filters.size) {
          products = products.filter((product) => {
            return filters.has(product.category);
          });
        }

        // console.log("p",products);
        return {
          filters,
          products,
        };
      });
    },
    [setState]
  );
  ////////////////////////////////////////////////////addProduct  compare-basket*/////////

  const addProductToCart = (productId) => {
    let mainProduct = products.find((product) => {
      return productId === product.id;
    });
     console.log("main",mainProduct);
    setNewCompareList((current) => [...current, mainProduct]);
  };

  /////////////////////remove an item/////////////////////////

  const removeProductFromCart = (id) => {
    const newFruits = newCompareList.filter((_, i) => i !== id);
    setNewCompareList(newFruits);
  };



  const emptyShoppingCart = () => {
    setNewCompareList([]);
  };
 

  return (
    <>
    <AuthContext.Provider value={{newCompareList}} >
      <div className="columns">
        <div className="siderbar-container col-3">
          <SideBarFilter
            minValue={minValue}
            maxValue={maxValue}
            setMinValue={setMinValue}
            setMaxValue={setMaxValue}
            setCondition={setCondition}
            newRangeHandler={newRangeHandler}
            products={products}
            brands={allBrands}
            onFilterChange={handleFilterChange}
            handleMotorCatg={handleMotorCatg}
            categories={allCategories}
            filteredBrands={filteredBrands}
            filteredCategories={filteredCategories}
             newCompareList={newCompareList}
            removeProductFromCart={removeProductFromCart}
            onClearProducts={emptyShoppingCart}
          />
        </div>
        <span className=" empty-container col-1"></span>
        <div className="column main col-8">
          <div className="ads-banner">advertisement</div>
          <div className="toolbar-container">
            <ListGrid
              openListHandler={openListHandler}
              showList={showList}
              handleAlignment={handleAlignment}
              currentView={currentView}
              asumptionProductOrderHandler={asumptionProductOrderHandler}
              ProductsData={ProductsData}
              titleSortHandler={titleSortHandler}
              newProductsSortHandler={newProductsSortHandler}
              usedProductsSortHandler={usedProductsSortHandler}
              sortedPriceHandler={sortedPriceHandler}
              availableProductsSortHandler={availableProductsSortHandler}
              brandSortHandler={brandSortHandler}
              maxSoledProductsHandler={maxSoledProductsHandler}
              setCondition={setCondition}
            />

            <div className="products-top-bar__selection"></div>
          </div>
          {sideBarChecked ? (
            <ProductListFiltered
              products={state.products}
              productsQty={state.products.length}
              isDetailedView={isDetailedView}
              handleMotorCatg={handleMotorCatg}
              categories={allCategories}
              addProductToCart={addProductToCart}
            />
          ) : (
            <ProductList
              products={products}
              isDetailedView={isDetailedView}
              addProductToCart={addProductToCart}
            />
          )}
          <div className="display-compare-page">
            <CompareProducts  />
          </div>

          <div className="pagination">
            {/* <Pagination
            items={orderedCourses}
            itemsCount={3}
            // pathname={`/category-info/${categoryName}`}
            pathname={`/category-info/trans`}
            setShownCourses={setShownCourses}
          /> */}
          </div>
        </div>
      </div>
    </AuthContext.Provider>
    </>
    
  );
}
