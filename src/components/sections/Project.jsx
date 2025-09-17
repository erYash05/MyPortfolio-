"use client";
import TitleHeader from "../TitleHeader";
import { ThreeDMarquee } from "../ui/3d-marquee";
import { ColourfulText } from "../ui/text";

export function ThreeDMarqueeDemo() {
  const images = [
    "../../../public/images/T8.jpeg",
    "https://149367133.v2.pressablecdn.com/wp-content/uploads/2023/05/airbnb-rooms-app-update-Wishlist-Calendar-and-Notes-2023-Summer-Release-1024x576.jpg",
    "../../../public/images/T6.jpeg",
    "https://thfvnext.bing.com/th/id/OIP.eMDdgj2yVyeNt2w7dPq6OgHaFf?w=247&h=183&c=7&r=0&o=7&cb=thfvnext&dpr=1.3&pid=1.7&rm=3",

    "../../../public/images/T7.jpeg",
    "https://149367133.v2.pressablecdn.com/wp-content/uploads/2023/05/airbnb-rooms-app-update-Wishlist-Calendar-and-Notes-2023-Summer-Release-1024x576.jpg",
    "https://thfvnext.bing.com/th/id/OIP.eMDdgj2yVyeNt2w7dPq6OgHaFf?w=247&h=183&c=7&r=0&o=7&cb=thfvnext&dpr=1.3&pid=1.7&rm=3",
    "https://149367133.v2.pressablecdn.com/wp-content/uploads/2023/05/airbnb-rooms-app-update-Wishlist-Calendar-and-Notes-2023-Summer-Release-1024x576.jpg",
    "../../../public/images/T6.jpeg",
    "https://thfvnext.bing.com/th/id/OIP.7hXwNDJpe06qa1mlOrUb0wHaEK?w=307&h=180&c=7&r=0&o=7&cb=thfvnext&dpr=1.3&pid=1.7&rm=3",
    "https://thfvnext.bing.com/th/id/OIP.eMDdgj2yVyeNt2w7dPq6OgHaFf?w=247&h=183&c=7&r=0&o=7&cb=thfvnext&dpr=1.3&pid=1.7&rm=3",
    "https://thfvnext.bing.com/th/id/OIP.7hXwNDJpe06qa1mlOrUb0wHaEK?w=307&h=180&c=7&r=0&o=7&cb=thfvnext&dpr=1.3&pid=1.7&rm=3",
    "https://thfvnext.bing.com/th/id/OIP.UBygcW6cX2Y6p6q6CzQ13wHaI4?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://149367133.v2.pressablecdn.com/wp-content/uploads/2023/05/airbnb-rooms-app-update-Wishlist-Calendar-and-Notes-2023-Summer-Release-1024x576.jpg",
    "https://thfvnext.bing.com/th/id/OIP.4LjDhAqoB1nJwvAFha-tXgHaFj?w=255&h=191&c=7&r=0&o=7&cb=thfvnext&dpr=1.3&pid=1.7&rm=3",
    "https://thfvnext.bing.com/th/id/OIP.eMDdgj2yVyeNt2w7dPq6OgHaFf?w=247&h=183&c=7&r=0&o=7&cb=thfvnext&dpr=1.3&pid=1.7&rm=3",
    "https://thfvnext.bing.com/th/id/OIP.UBygcW6cX2Y6p6q6CzQ13wHaI4?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://thfvnext.bing.com/th/id/OIP.7hXwNDJpe06qa1mlOrUb0wHaEK?w=307&h=180&c=7&r=0&o=7&cb=thfvnext&dpr=1.3&pid=1.7&rm=3",
    "https://thfvnext.bing.com/th/id/OIP.7hXwNDJpe06qa1mlOrUb0wHaEK?w=307&h=180&c=7&r=0&o=7&cb=thfvnext&dpr=1.3&pid=1.7&rm=3",
    "https://thfvnext.bing.com/th/id/OIP.UBygcW6cX2Y6p6q6CzQ13wHaI4?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://thfvnext.bing.com/th/id/OIP.4LjDhAqoB1nJwvAFha-tXgHaFj?w=255&h=191&c=7&r=0&o=7&cb=thfvnext&dpr=1.3&pid=1.7&rm=3",
    "https://thfvnext.bing.com/th/id/OIP.UBygcW6cX2Y6p6q6CzQ13wHaI4?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://149367133.v2.pressablecdn.com/wp-content/uploads/2023/05/airbnb-rooms-app-update-Wishlist-Calendar-and-Notes-2023-Summer-Release-1024x576.jpg",
    "https://thfvnext.bing.com/th/id/OIP.UBygcW6cX2Y6p6q6CzQ13wHaI4?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://thfvnext.bing.com/th/id/OIP.UBygcW6cX2Y6p6q6CzQ13wHaI4?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://thfvnext.bing.com/th/id/OIP.7hXwNDJpe06qa1mlOrUb0wHaEK?w=307&h=180&c=7&r=0&o=7&cb=thfvnext&dpr=1.3&pid=1.7&rm=3",
    "https://149367133.v2.pressablecdn.com/wp-content/uploads/2023/05/airbnb-rooms-app-update-Wishlist-Calendar-and-Notes-2023-Summer-Release-1024x576.jpg",
    "https://thfvnext.bing.com/th/id/OIP.7hXwNDJpe06qa1mlOrUb0wHaEK?w=307&h=180&c=7&r=0&o=7&cb=thfvnext&dpr=1.3&pid=1.7&rm=3",
    "https://149367133.v2.pressablecdn.com/wp-content/uploads/2023/05/airbnb-rooms-app-update-Wishlist-Calendar-and-Notes-2023-Summer-Release-1024x576.jpg",
    "https://thfvnext.bing.com/th/id/OIP.UBygcW6cX2Y6p6q6CzQ13wHaI4?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://thfvnext.bing.com/th/id/OIP.7hXwNDJpe06qa1mlOrUb0wHaEK?w=307&h=180&c=7&r=0&o=7&cb=thfvnext&dpr=1.3&pid=1.7&rm=3",
    "https://149367133.v2.pressablecdn.com/wp-content/uploads/2023/05/airbnb-rooms-app-update-Wishlist-Calendar-and-Notes-2023-Summer-Release-1024x576.jpg",
    "https://thfvnext.bing.com/th/id/OIP.UBygcW6cX2Y6p6q6CzQ13wHaI4?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://thfvnext.bing.com/th/id/OIP.7hXwNDJpe06qa1mlOrUb0wHaEK?w=307&h=180&c=7&r=0&o=7&cb=thfvnext&dpr=1.3&pid=1.7&rm=3",
    "https://thfvnext.bing.com/th/id/OIP.UBygcW6cX2Y6p6q6CzQ13wHaI4?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://thfvnext.bing.com/th/id/OIP.7hXwNDJpe06qa1mlOrUb0wHaEK?w=307&h=180&c=7&r=0&o=7&cb=thfvnext&dpr=1.3&pid=1.7&rm=3",
    "https://149367133.v2.pressablecdn.com/wp-content/uploads/2023/05/airbnb-rooms-app-update-Wishlist-Calendar-and-Notes-2023-Summer-Release-1024x576.jpg",
    "https://thfvnext.bing.com/th/id/OIP.UBygcW6cX2Y6p6q6CzQ13wHaI4?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
  ];
  return (
    <div>
      {/* Section Header */}
      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-20 mt-20 text-center">
        <TitleHeader sub="🚀 Turning Ideas into Reality💻" />
      </div>

      {/* Section Title */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white font-sans leading-snug">
          From
          <ColourfulText text=" Concept" /> <br /> to Deployment
        </h1>
      </div>
      <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
        <ThreeDMarquee images={images} />
      </div>
    </div>
  );
}
