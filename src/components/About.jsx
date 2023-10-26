import React from "react";

export default function About(){
    return(
        <React.StrictMode>
        <>
       

        <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="https://i.natgeofe.com/n/c9107b46-78b1-4394-988d-53927646c72b/1095_square.jpg" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
<button className="bg-blue-500 text-white py-2 px-4 rounded">
  Click Me
</button>
        </>
        </React.StrictMode>
    )
}