import React from 'react'
import designPortfolio from '../assets/asset-design-portfolio.pdf'

const Designs = () => {
  return (
    <div className='font-medium mb-4 flex flex-col gap-y-2'>
        <h3 className="one-title text-[#e06d43] relative">
            My Design Background
        </h3>
        <h3 className='text-slate-600'>
            If you haven't noticed by now, I <span className="font-semibold">love everything UI/UX & design</span>. 
            Attached below is my design portfolio where you can see examples of sites I've designed + developed. 
            You can find more on my <a href="https://thryvedesign.com" target='_blank' className='hyperlink'>agency site</a> as well!
        </h3>
        <div className="w-full flex flex-col items-center">
        <iframe
            src={designPortfolio}
            title="Design Portfolio"
            width="100%"
            height="600px"
            className="rounded-lg border"
            style={{ minHeight: '500px' }}
        >
            This browser does not support PDFs.
            <a href={designPortfolio}>Download PDF</a>
        </iframe>
        <div className="text-[13px] mt-2 text-slate-500">
            If the PDF viewer doesn't load, you can{" "}
            <a
            href={designPortfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="hyperlink"
            >
            click here to download or view directly.
            </a>
        </div>
        </div>
    </div>
  )
}

export default Designs