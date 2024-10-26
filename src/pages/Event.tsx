import Camera from '../assets/camera.png'
import Elipse1 from '../assets/ellipse1.svg';
import Elipse2 from '../assets/ellipse2.svg';
import Elipse3 from '../assets/ellipse3.svg'
import Triangle3 from '../assets/triangle3.svg'
export const Event = ()=>{
    return (
    <>
    <div className="container mx-auto p-4 h-full flex items-center justify-center mb-5">
      <div className="grid sm:grid-cols-1 lg:grid-cols-[75%,25%] gap-4 w-full h-full">
        
        <div className="bg-[#FCFAEE] relative bg-white-200 p-4 rounded-lg shadow-md flex flex-col justify-center ">
          <div className='absolute top-0 left-0'>
            <img className="" src={Elipse2}/>
          </div>
          <div className='absolute bottom-0 left-0'>
            <img className="" src={Elipse1}/>
          </div>
          <div className='absolute top-0 right-0 -z-1'>
            <img className="" src={Elipse3}/>
          </div>
          <div className='absolute bottom-0 right-0 -z-1'>
            <img className="" src={Triangle3}/>
          </div>
          <div className="relative max-w-[90%] mt-[20%] px-6">
          <h2 className="text-4xl font-semibold">Amar Ujala National Photography Contest</h2>
          <p className="mt-2 text-gray-700">Capture the world through your lens and showcase your talent in our Photography Contest! Submit your best shots for a chance to win prizes and share your unique perspective</p>
        </div>
        <div className='relative w-[90%] border border-gray/20 mt-[5rem] rounded-lg p-5 mx-6 flex flex-row gap-12'>
        <a>Description</a>
        <a>Deadlines</a>
        <a>Eligibility</a>
        <a>FAQ's</a>
        <a>About</a>
        </div>
        <div className='relative w-[90%] mt-[3rem] rounded-lg p-5 flex flex-col gap-12'>
        
        <div className="min-h-screen">

  <section className="rounded-lg p-6 mb-6">
    <h2 className="text-2xl font-semibold text-black mb-4">Theme</h2>
    <ul className="list-disc pl-6 text-gray-700">
      <li><strong>Nature's Wonders</strong> - Capture the beauty of nature in your surroundings.</li>
      <li><strong>Life in Motion</strong> - Showcase moments that express movement and energy.</li>
      <li><strong>Colors of Culture</strong> - Highlight diversity and vibrancy within your community.</li>
    </ul>
  </section>


  <section className="rounded-lg p-6 mb-6">
    <h2 className="text-2xl font-semibold text-black mb-4">Categories</h2>
    <ul className="list-disc pl-6 text-gray-700">
      <li><strong>Primary School</strong> (Grades 3–5)</li>
      <li><strong>Middle School</strong> (Grades 6–8)</li>
      <li><strong>High School</strong> (Grades 9–12)</li>
    </ul>
  </section>

 
  <section className="rounded-lg p-6 mb-6">
    <h2 className="text-2xl font-semibold text-black mb-4">Entry Criteria</h2>
    <ul className="list-disc pl-6 text-gray-700">
      <li>Age Group: Open to students aged 8-18.</li>
      <li>Submission Format: Digital photos in JPEG or PNG, minimum resolution of 1080p.</li>
      <li>Photo Limit: Each participant may submit up to 3 photos.</li>
      <li>Deadline: Submit entries by November 15th, 2024.</li>
    </ul>
  </section>


  <section className="rounded-lg p-6 mb-6">
    <h2 className="text-2xl font-semibold text-black mb-4">Judging Criteria</h2>
    <ul className="list-disc pl-6 text-gray-700">
      <li><strong>Creativity</strong>: Originality and unique perspective.</li>
      <li><strong>Technical Skill</strong>: Composition, lighting, and clarity.</li>
      <li><strong>Relevance</strong>: Alignment with the theme.</li>
      <li><strong>Impact</strong>: Emotional and visual impact of the photograph.</li>
    </ul>
  </section>

  <section className="rounded-lg p-6 mb-6">
    <h2 className="text-2xl font-semibold text-black mb-4">Awards</h2>
    <ul className="list-disc pl-6 text-gray-700">
      <li><strong>Best Overall Photograph</strong>: Trophy, photography kit, and certificate.</li>
      <li><strong>Category Winners</strong>: Digital camera and certificate.</li>
      <li><strong>Honorable Mentions</strong>: Certificate of recognition.</li>
    </ul>
  </section>

 
  <section className="rounded-lg p-6 mb-6">
    <h2 className="text-2xl font-semibold text-black mb-4">Responsibilities of Participants</h2>
    <ul className="list-disc pl-6 text-gray-700">
      <li><strong>Preparation</strong>: Learn the basics of framing, lighting, and focus.</li>
      <li><strong>Submission</strong>: Ensure photos are original and have not been digitally manipulated.</li>
      <li><strong>Presentation</strong>: Write a short description (50 words) for each photo submitted.</li>
    </ul>
  </section>


  <section className="rounded-lg p-6 mb-6">
    <h2 className="text-2xl font-semibold text-black mb-4">Timeline</h2>
    <ul className="list-disc pl-6 text-gray-700">
      <li><strong>Registration Opens</strong>: October 1, 2024</li>
      <li><strong>Submission Deadline</strong>: November 15, 2024</li>
      <li><strong>Results Announcement</strong>: December 10, 2024</li>
    </ul>
  </section>


</div>

        </div>
        </div>
        <div className='flex flex-col gap-10'>
        <div className="bg-white-200 p-4 rounded-lg shadow-md bg-[#FCFAEE]" style={{maxHeight: 'fit-content'}}>
          <div className=" flex flex-col justify-center">
          <img src={Camera} className="sm:h-[410px] lg:h-[180px] object-cover" alt="Camera" />
          <div className="py-10 flex flex-col gap-2">
            <div>
            <div className="text-gray-500 text-md">Applied</div>
            <div className="text-gray-800 text-lg">100</div>
            </div>
            <div>
            <div className="text-gray-500 text-md">Application Deadline</div>
            <div className="text-gray-800 text-lg">10 days left</div>
            </div>
            <div>
            <div className="text-gray-500 text-md">Contest Starts On</div>
            <div className="text-gray-800 text-lg">30th November,2024</div>
            </div>
           
            
          </div>
          <div className="w-100 bg-purple-400 rounded-md p-3 text-center">Apply</div>
          </div>
        </div>
        <div className="bg-white-200 p-4 rounded-lg shadow-md bg-[#FCFAEE] sm:mb-12" style={{maxHeight: 'fit-content'}}>
          <div className=" flex flex-col justify-center">
         
         <div className="text-gray-500 text-md">Sponsered By</div>
         <div className="text-gray-800 text-lg flex flex-row gap-x-5 flex-wrap mt-1">
         <div>Airtel</div>
         <div>Amar Ujala</div>
         <div>Sponser3</div>
         <div>Sponser4</div>       
         </div>
      
          </div>
        </div>
        </div>
        
      </div>
    </div>
    </>
    )
}