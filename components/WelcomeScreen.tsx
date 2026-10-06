"use client"
export default function WelcomeScreen(){
    return(
        <div className="bg-white/10 backdrop-blur-md border border-white/25 rounded-3xl p-10 text-center text-white max-w-lg mx-auto mt-12 shadow-2xl">
    <div className="text-5xl mb-4">🌍</div>
    <h2 className="text-2xl font-bold mb-2">Welcome to the weather app</h2>
    <p className="text-white/70 text-sm">
     Search for any city in the world using the search bar above to instantly view current weather conditions and future forecasts.
    </p>
  </div>
) 
}