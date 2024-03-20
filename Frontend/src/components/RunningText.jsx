import React from 'react'
import {TypeAnimation} from "react-type-animation";

const RunningText = () => {
  return (
    <div className='w-[80%] mx-auto flex flex-col-reverse lg:flex-row-reverse items-center lg:justify-center gap-[80px]'>
      {/* left */}
      <div  className='w-[400px] lg:w-[600px]'>
        <h1 className='text-cyan-500 text-[30px] font-semibold text-center pb-4'>ज्ञान और मनोरंजन के साथ विभिन्न विषयों का अन्वेषण </h1>
        <div className='text-yellow-500 border-2 border-pink-500 w-[400px] lg:w-[100%] h-[350px]  lg:h-[340px] rounded-md p-[20px] font-semibold'>
          <TypeAnimation
              style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
              sequence={[
                `1.विभिन्न विषयों का अन्वेषण करें और मनोरंजक क्विज़ के साथ अपने ज्ञान का परीक्षण करें।
                2.मजेदार प्रश्नों का सामना करें और हर दिन कुछ नया सीखें।
                3.दोस्तों और परिवार के साथ प्रतिस्पर्धा करें और देखें कौन सबसे बुद्धिमान है।
                4.विभिन्न श्रेणियों और विषयों से रोचक तथ्यों और तथ्यों की खोज करें।
                5.हमारे क्विज़ के साथ अपनी मनस्थिति को मजबूत करें और अपनी स्मृति को बेहतर बनाएं।
                6.हमारे इंटरैक्टिव और लतात्मक क्विज़ के साथ घंटों तक मनोरंजन करें।`, 
                1000,
                '',
              ]}
              repeat={Infinity}
          />
      </div>
      </div>
      

      {/* right */}
      <div className='w-[400px] lg:w-[600px]'>
        <h1 className='text-cyan-500 text-[28px] text-center font-semibold pb-4'>Exploration of Diverse Subjects with Knowledge and Entertainment</h1>
        <div className='text-pink-500 border-2 border-yellow-500 w-[400px] lg:w-[100%] h-[350px]  lg:h-[340px] rounded-md p-[20px] font-bold'>
            <TypeAnimation
                style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
                sequence={[
                  `1.Explore diverse topics and test your knowledge with engaging quizzes.
                    2.Challenge yourself with fun questions and learn something new every day.
                    3.Compete against friends and family to see who's the smartest.
                    4.Discover fascinating facts and trivia from various categories and subjects.
                    5.Sharpen your mind and improve your memory with our quizzes.
                    6.Stay entertained for hours with our interactive and addictive quizzes.
                    `, 
                  1000,
                  '',
                ]}
                repeat={Infinity}
            />
      </div>
      </div>
    </div>
    
  )
}

export default RunningText;
