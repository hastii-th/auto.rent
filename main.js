const API_ENDPOINT = 'http://localhost:3001/cars';

async function fetchAndRenderCars() {
  try {
    const response = await fetch(API_ENDPOINT);
    const cars = await response.json();
    
    const container = document.getElementById('car-list');
    container.innerHTML = ''; // پاک کردن لودینگ قبلی

    cars.forEach(car => {
      container.innerHTML += `
        <div class="bg-white rounded-[32px] p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative group">
          
          ${car.discount ? `
            <div class="absolute top-6 right-6 bg-[#11378F] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg z-10">
              ٪${car.discount}
            </div>
          ` : ''}

          <div class="h-48 w-full mb-6 flex items-center justify-center overflow-hidden">
            <img src="${car.image}" alt="${car.name}" 
                 class="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-500" />
          </div>

          <div class="mb-5 text-right px-1">
            <h3 class="text-xl font-extrabold text-gray-800 mb-2">${car.name}</h3>
            <p class="text-gray-400 text-sm font-medium">مدل: ${car.model}</p>
          </div>

          <div class="space-y-3 mb-6">
            <div class="flex flex-row items-center justify-between bg-gray-50 p-4 rounded-2xl">
              <span class="text-gray-500 text-xs font-bold">روزانه</span>
              <div class="flex flex-row-reverse items-center gap-1">
                <span class="text-[#194BF0] font-black text-lg">${car.dailyPrice}</span>
                <span class="text-gray-400 text-[10px]">از ۱ تا ۳۰ روز:</span>
              </div>
            </div>
            <div class="flex flex-row items-center justify-between bg-gray-50 p-4 rounded-2xl">
              <span class="text-gray-500 text-xs font-bold">ماهانه</span>
              <div class="flex flex-row-reverse items-center gap-1">
                <span class="text-[#194BF0] font-black text-lg">${car.monthlyPrice}</span>
                <span class="text-gray-400 text-[10px]">از ۱ تا ۳۰ روز:</span>
              </div>
            </div>
          </div>

          <div class="flex flex-row items-center justify-between px-2 mb-6 border-t border-gray-100 pt-5">
            <span class="text-gray-500 text-xs font-bold">مبلغ ضمانت:</span>
            <span class="text-gray-800 text-xs font-extrabold">${car.deposit}</span>
          </div>

          <button class="w-full bg-[#194BF0] hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all active:scale-[0.97] shadow-lg shadow-blue-100">
            درخواست رزرو
          </button>
        </div>
      `;
    });
  } catch (error) {
    console.error("Error loading cars:", error);
    document.getElementById('car-list').innerHTML = "<p class='text-center col-span-3 text-red-500'>خطا در دریافت تصاویر و اطلاعات از سرور!</p>";
  }
}

fetchAndRenderCars();