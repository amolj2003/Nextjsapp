import React from 'react'

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 space-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="py-11 space-y-5 text-xs text-gray-800">
        <h5 className="font-bold"> ABOUT</h5>
        <p> How Airbnb works</p>
        <p> Newsroom</p>
        <p> Inverstors</p>
        <p> Airbnb Plus</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold"> COMMUNITY </h5>
        <p>Accessibility</p>
        <p> This is not a real site </p>
        <p> Its a pretty awesome clone </p>
        <p>Referrals Accepted</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold"> HOST </h5>
        <p>Amol Jaiswal </p>
        <p>Presents</p>
        <p>Zero To Full Stack Hero</p>
        <p> Please go and watch </p>
        <p>Github:amolj2003</p>
      </div>
      
      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold"> SUPPORT </h5>
        <p>Help center </p>
        <p>Trust and Safety</p>
        <p> Say Hi to Youtube </p>
        <p> Easter Eggs </p>
        <p> For The Wins</p>
      </div>

    </div>
  )
}

export default Footer
