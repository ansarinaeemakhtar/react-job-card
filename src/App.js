import JobCard from './JobCard';
import JobForm from './JobForm';

const jobs = [
	{
		'id': 1,
		'title': 'UX UI Designer',
		'company': 'Great Vibes - Information Technology',
		'address': 'Chennai, Tamilnadu, India (In-office)',
		'shift': 'Part-Time (9.00 am - 5.00 pm IST)',
		'experience': 'Experience (1 - 2 years)',
		'salary': 'INR (₹) 30,000 - 60,000 / Month',
		'size': '51-200 employees',
    'thumb': 'https://s3-alpha-sig.figma.com/img/64e2/0be0/8cf548f99b78c28360752b9573147dd9?Expires=1702252800&Signature=bsV2FlHYAFGH8ah2fTNJfs7pfWxDLOjZN5wLYb8E3mWQOM21NDmz-J9-F3DzXHR847y6sBGhpAVLBDycj~RE05LQSmNzknhzPScfiRbLHTRFTuRrkTWbIzpIfkUaZbrVEyS4-8QO-3Dm9WMhcujIoBjwUfc90fOtl07ZfTt337y8JTxBEyFpvfhI-TVXw2Bd60TnjjNrNYRz~eoWtN4hJLj-KaYAdrTerSyvpkrBZcq4H02mYhw64FVZI~G458nvlNqzFZoWS4UQ4uEQggXbTec-pmsTSfaJkTFgHhIYR2tm5ZI9l3VNDWJAMgY9KHH1oUQoiaYnutEOBszEAOWD5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
	},
	{
		'id': 2,
		'title': 'Developer',
		'company': 'Great Vibes - Information Technology',
		'address': 'Chennai, Tamilnadu, India (In-office)',
		'shift': 'Part-Time (9.00 am - 5.00 pm IST)',
		'experience': 'Experience (1 - 2 years)',
		'salary': 'INR (₹) 50,000 - 70,000 / Month',
		'size': '51-200 employees',
    'thumb': 'https://s3-alpha-sig.figma.com/img/64e2/0be0/8cf548f99b78c28360752b9573147dd9?Expires=1702252800&Signature=bsV2FlHYAFGH8ah2fTNJfs7pfWxDLOjZN5wLYb8E3mWQOM21NDmz-J9-F3DzXHR847y6sBGhpAVLBDycj~RE05LQSmNzknhzPScfiRbLHTRFTuRrkTWbIzpIfkUaZbrVEyS4-8QO-3Dm9WMhcujIoBjwUfc90fOtl07ZfTt337y8JTxBEyFpvfhI-TVXw2Bd60TnjjNrNYRz~eoWtN4hJLj-KaYAdrTerSyvpkrBZcq4H02mYhw64FVZI~G458nvlNqzFZoWS4UQ4uEQggXbTec-pmsTSfaJkTFgHhIYR2tm5ZI9l3VNDWJAMgY9KHH1oUQoiaYnutEOBszEAOWD5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
	},
	{
		'id': 3,
		'title': 'Interaction Designer',
		'company': 'Great Vibes - Information Technology',
		'address': 'Chennai, Tamilnadu, India (In-office)',
		'shift': 'Part-Time (9.00 am - 5.00 pm IST)',
		'experience': 'Experience (1 - 2 years)',
		'salary': 'INR (₹) 30,000 - 50,000 / Month',
		'size': '51-200 employees',
    'thumb': 'https://s3-alpha-sig.figma.com/img/64e2/0be0/8cf548f99b78c28360752b9573147dd9?Expires=1702252800&Signature=bsV2FlHYAFGH8ah2fTNJfs7pfWxDLOjZN5wLYb8E3mWQOM21NDmz-J9-F3DzXHR847y6sBGhpAVLBDycj~RE05LQSmNzknhzPScfiRbLHTRFTuRrkTWbIzpIfkUaZbrVEyS4-8QO-3Dm9WMhcujIoBjwUfc90fOtl07ZfTt337y8JTxBEyFpvfhI-TVXw2Bd60TnjjNrNYRz~eoWtN4hJLj-KaYAdrTerSyvpkrBZcq4H02mYhw64FVZI~G458nvlNqzFZoWS4UQ4uEQggXbTec-pmsTSfaJkTFgHhIYR2tm5ZI9l3VNDWJAMgY9KHH1oUQoiaYnutEOBszEAOWD5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
	},
	{
		'id': 4,
		'title': 'SEO Analyst',
		'company': 'Great Vibes - Information Technology',
		'address': 'Chennai, Tamilnadu, India (In-office)',
		'shift': 'Part-Time (9.00 am - 5.00 pm IST)',
		'experience': 'Experience (1 - 2 years)',
		'salary': 'INR (₹) 30,000 - 50,000 / Month',
		'size': '51-200 employees',
    'thumb': 'https://s3-alpha-sig.figma.com/img/64e2/0be0/8cf548f99b78c28360752b9573147dd9?Expires=1702252800&Signature=bsV2FlHYAFGH8ah2fTNJfs7pfWxDLOjZN5wLYb8E3mWQOM21NDmz-J9-F3DzXHR847y6sBGhpAVLBDycj~RE05LQSmNzknhzPScfiRbLHTRFTuRrkTWbIzpIfkUaZbrVEyS4-8QO-3Dm9WMhcujIoBjwUfc90fOtl07ZfTt337y8JTxBEyFpvfhI-TVXw2Bd60TnjjNrNYRz~eoWtN4hJLj-KaYAdrTerSyvpkrBZcq4H02mYhw64FVZI~G458nvlNqzFZoWS4UQ4uEQggXbTec-pmsTSfaJkTFgHhIYR2tm5ZI9l3VNDWJAMgY9KHH1oUQoiaYnutEOBszEAOWD5A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
	}
];

function App() {
  return (
    <div className="App lg:container mx-auto">
      <div className='container-form'>
        <JobForm />
      </div>

      <div className='container-card text-center flex flex-row flex-wrap gap-4 mb-24 justify-center'>
        {
          jobs.length > 0 ? jobs.map(job => <JobCard job={job} />) : <h1>'No jobs available!'</h1>
        }
        {/* <JobCard />
        <JobCard />
        <JobCard />
        <JobCard /> */}
      </div>
    </div>
  );
}

export default App;
