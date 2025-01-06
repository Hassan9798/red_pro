"use client";
import React, { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Slider } from "../ui/slider";
import { cn } from "@/lib/utils";

import categoryFilterImage from "../../../public/images/category-filter-image.png";
// ../../../public/images/category-filter-image.png
import Image from "next/image";
import { Button } from "../ui/button";
import { BsStars } from "react-icons/bs";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import ProductCarouselCard from "../product-carousel-card";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getAllSalesProducts, getProductsByCategory, getProductsByPrice } from "@/api/home";
import { STORAGE_URL } from "@/config";
import { addItem } from "@/redux/cart";
import toast from "react-hot-toast";

export type Filters = "all" | "fruits" | "vegetables" | "deals" | "new";
interface CategoryParams {
  id?: string;
  sales?: string;
}
const Category = ({ id, sales }: { id?: string, sales?: string }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector(
    (state: RootState) => state.centeralizedStateData.home
  );
  const filters = ["all", "fruits", "vegetables", "deals", "new"];
  const category = [
    "all",
    "apples",
    "avocades",
    "bananas",
    "berries",
    "citrus",
    "dried fruits & nuts",
    "grapes",
    "melons",
    "pears",
    "stone fruits & cherries",
  ];
  // const totalPages = [1, 2, 3];

  const [currentFilter, setCurrentFilter] = useState<any>(id ?? null);
  const [cat, setCat] = useState<Array<any>>([]);
  const [currentCategory, setCurrentCategory] = useState(id ?? "All");
  const [price, setPrice] = useState([10]);
  // const [price, setPrice] = useState([10]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState<Array<number>>([])
  const [allProducts, setAllProducts] = useState<Array<any>>([]);
  const [total, setTotal] = useState(0)
  const [catId, setCatId] = useState<string | undefined>(id)

  const handleFilter = (id: number) => {
    setCurrentFilter(id);
    if (catId) setCatId(undefined)
    setPrice([10])
  };

  const handleCategory = (category: string) => {
    setCurrentCategory(category);
    if (catId) setCatId(undefined)
    setPrice([10])
  };

  const handlePrice = (value: number[]) => {
    setCurrentFilter("price");
    setCurrentCategory("price");
    if (catId) setCatId(undefined)
    setPrice(value);
  };

  const handleFinalPrice = (value: number[]) => {
    getProductsByPrice(`93|RkxOUacgowFISAEvQvLOZQa83ihce1hmhuhpgpe5a573563d`, { min_price: 0, max_price: value[0] }).then((res) => {
      setAllProducts(res.data) // this api response is different  and also doesnot support pagination
      if (res.data.length > 0) {
        setTotal(res.data.total ?? 0)
      }
      else {
        setTotal(0)
      }
    }).catch((err) => {
      if (err?.response?.status === 404) {
        setAllProducts([])
        setTotal(0)
      }
    })
  }

  const handlePage = (value: number) => {
    setPage(value);
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  const handleNext = () => {
    if (page < totalPages.length) {
      setPage(page + 1);
    }
  }

  // setting categories from redux store
  useEffect(() => {
    setCat([{ name: "All", id: null }, ...categories])
  }, [categories])

  // fetching products
  useEffect(() => {
    if (currentFilter === null && !catId && !sales) {
      getAllProducts(null, { page }).then((res) => {
        setAllProducts([...res.data.data])
        if (res.data.data.length > 0) {
          setTotal(res.data.total)
          const arr = [];
          for (let i = 1; i <= Math.ceil(res.data.total / 10); i++) {
            arr.push(i)
          }
          setTotalPages(arr)
        }
        else {
          setTotal(0)
        }

      }).catch((err) => {
        console.log(err)
      })
    }
    else if (currentFilter === null && !catId && sales) {
      console.log("etc")
      getAllSalesProducts(null, { page }).then((res) => {
        // page === 1 ?
        setAllProducts([...res.data.data])
        // :
        // setAllProducts([...allSalesProducts,...res.data.data])
        if (res.data.data.length > 0) {
          setTotal(res.data.total)
          const arr = [];
          for (let i = 1; i <= Math.ceil(res.data.total / 10); i++) {
            arr.push(i)
          }
          setTotalPages(arr)
        }
        else {
          setTotal(0)
        }
      }).catch((err) => {
        console.log(err)
      })
    }
    else if (currentFilter !== "price" && currentFilter !== null) {
      getProductsByCategory('93|RkxOUacgowFISAEvQvLOZQa83ihce1hmhuhpgpe5a573563d', null, currentFilter ?? catId).then((res) => {
        setAllProducts(res.data) // this api response is different  and also doesnot support pagination
        if (res.data.length > 0) {
          setTotal(res.data.total ?? 0)
        }
        else {
          setTotal(0)
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }, [page, currentFilter])

  const handleAddToCart = (item: any) => {
    const obj = {
      category_id: item.category_id,
      vendor_id: item.vendor_id,
      id: item.id,
      description: item.description,
      inventory_id: item.inventories[0].id,
      grade_id: item.inventories[0].grade_id,
      price: parseInt(item.inventories[0].discounted_price ?? item.inventories[0].price),
      image: JSON.parse(item.inventories[0].inventory_image)[0],
      size: item.inventories[0].size,
      name: item.name,
    }
    dispatch(addItem(obj))
    toast.success("Item added to cart")
  }
  return (
    <main className="w-full min-h-screen flex flex-col gap-8">
      <div className="flex py-12 items-start gap-4">
        {/* filters column */}
        <div className="md:basis-[26%] hidden md:flex flex-col gap-8">
          <h1 className="text-4xl font-bold">
            Category /&nbsp;
            <span className="text-primary capitalize">{currentCategory}</span>
          </h1>
          {/* filters range */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-4 items-start w-full max-w-96">
              <div className="font-semibold text-base">Filters:</div>
              <div className="font-bold text-[15px] text-neutral-light">${price}</div>
              <div className="flex flex-col gap-2 w-full">
                <Slider
                  defaultValue={[10]}
                  min={10}
                  max={1000}
                  step={1}
                  onValueChange={handlePrice}
                  onValueCommit={handleFinalPrice}
                  value={price}
                  className="w-full pt-2"
                />
                <div className="w-full flex justify-between items-center font-bold text-[10px] text-neutral-light">
                  <div>$10</div>
                  <div>$1000</div>
                </div>
              </div>
            </div>
            <div className="pl-3 py-2 max-w-96 flex flex-col gap-4 relative">
              {/* border left */}
              <div className="absolute top-0 left-0 w-[2px] h-24 bg-primary rounded-full" />
              <div className="text-base font-medium">Category:</div>
              <div className="flex flex-col gap-2">
                {cat.map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      "text-sm font-medium capitalize cursor-pointer text-neutral-light",
                      item.name === currentCategory && "text-primary"
                    )}
                    onClick={() => { handleFilter(item?.id ?? null); handleCategory(item.name) }}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
            <Image
              src={categoryFilterImage}
              alt="image"
              placeholder="blur"
              className="rounded-2xl object-contain"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-8">
          {/* top bar */}
          <div className="flex justify-between items-center flex-wrap gap-4">
            {/* search input */}
            <div className="w-full xl:max-w-[40%] p-3 bg-[#DBDBDB]/50 flex items-center rounded-full">
              <div className="flex w-full gap-2 px-2 items-center">
                <Image
                  src={"/icons/search.png"}
                  alt="search"
                  width={14}
                  height={15}
                />
                {/* <div className='text-sm text-neutral-light'>Search</div> */}
                <input
                  placeholder="Search"
                  className="bg-transparent w-full text-sm text-neutral-light focus-visible:outline-none"
                />
              </div>
            </div>
            {/* filters */}
            <div className="flex flex-col md:flex-row gap-6 md:items-center">
              <div className="text-sm">Shop by:</div>
              <div className="flex gap-4 items-center flex-wrap">
                {cat.map((item, index) => (
                  <Button
                    key={index}
                    variant={"outline"}
                    size={"lg"}
                    onClick={() => { handleFilter(item?.id ?? null); handleCategory(item.name) }}
                    className={cn(item?.id === currentFilter && "text-primary")}
                  >
                    <BsStars
                      className={cn(
                        item?.id === currentFilter ? "block" : "hidden",
                        "text-sm"
                      )}
                    />
                    <div className="capitalize">{item.name}</div>
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allProducts.length > 0 ?
              allProducts.map((item, index) =>
              (
                <ProductCarouselCard
                  key={index}
                  title={item.name ?? item.title}
                  description={item?.description}
                  buttonText={item.buttonText ?? "Add to Cart"}
                  imgUrl={item.imgUrl ? item.imgUrl : item.product_images.length == 1 ? STORAGE_URL + item.product_images[0] : STORAGE_URL + item.product_images[1]}
                  price={item.inventories && item.inventories.length > 0 ? item.inventories[0].price : item?.price}
                  discounted_price={item.inventories && item.inventories.length > 0 ? item.inventories[0].discounted_price : item?.discounted_price}
                  handleClick={() => item.inventories && item.inventories.length > 0 ? handleAddToCart(item) : toast.error("Out of stock")}
                  buttonIcon={item?.buttonIcon}
                  isBookmark={item?.isBookmark ?? true}
                  isFav={item?.isFav ?? true}
                />
              )
              )
              :
              // <div className="flex items-center justify-center h-[300px]">
              <div className="flex flex-col items-center justify-center h-[500px] w-[50vw] gap-2">
                <div className="flex items-center gap-2">
                  <BsStars className="block" />
                  <BsStars className="block" />
                  <BsStars className="block" />
                  <BsStars className="block" />
                  <BsStars className="block" />
                </div>
                <div className="text-primary">No products found</div>
              </div>
              // </div>
            }
          </div>
        </div>
      </div>
      {/* pagination */}
      <div className="w-full flex justify-end gap-1 items-center text-base font-bold text-[#DDDDDD]">
        {total > 0 && <>
          {totalPages.map((item, index) => (
            <div key={index} onClick={() => handlePage(item)}>
              <span className={`${item === page && "text-primary"} cursor-pointer`}>{item}</span>
              &nbsp;,
            </div>
          ))}
          <div>...</div>
          <div className="flex items-center gap-2 text-2xl">
            <div onClick={handlePrevious} className={`${page > 1 && "text-primary"} cursor-pointer`}><GoChevronLeft /></div>
            <div onClick={handleNext} className={`${page < 3 && "text-primary"} cursor-pointer`}><GoChevronRight /></div>
          </div>
        </>
        }
      </div>
    </main>
  );

};

export default Category;

const cards = [
  {
    imgUrl: "/images/banana.png",
    title: "Banana: Yellow Plantains",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/green-banana.png",
    title: "Banana: Green Plantains",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/strawberries.png",
    title: "Organic Strawberries",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/blueberries.png",
    title: "Organic Blueberries",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/banana.png",
    title: "Banana: Yellow Plantains",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/green-banana.png",
    title: "Banana: Green Plantains",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/strawberries.png",
    title: "Organic Strawberries",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/blueberries.png",
    title: "Organic Blueberries",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/banana.png",
    title: "Banana: Yellow Plantains",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/green-banana.png",
    title: "Banana: Green Plantains",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/strawberries.png",
    title: "Organic Strawberries",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/blueberries.png",
    title: "Organic Blueberries",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/banana.png",
    title: "Banana: Yellow Plantains",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/green-banana.png",
    title: "Banana: Green Plantains",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/strawberries.png",
    title: "Organic Strawberries",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/blueberries.png",
    title: "Organic Blueberries",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
];
