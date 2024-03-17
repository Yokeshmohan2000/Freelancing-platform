import React from 'react'

function Footer() {
  return (
    <div>
     <footer className="bg-gray-800 py-8">
      <div className="container mx-auto text-center text-white">
        <div className="flex flex-wrap justify-center mb-4">
          <div className="mr-8">
            <h3 className="text-lg font-semibold mb-2">Freelancer</h3>
            <ul className="text-md">
             
              <li>Categories</li>
              <li>Projects</li>
              <li>Contests</li>
              <li>Freelancers</li>
              <li>Enterprise</li>
              <li>Membership</li>
              <li>Preferred Freelancer Program</li>
              <li>Project Management</li>
              <li>Local Jobs</li>
              <li>Photo Anywhere</li>
              <li>Showcase</li>
              <li>API for Developers</li>
              <li>Get Verified</li>
              <li>Desktop App</li>
            </ul>
          </div>
          <div className="mr-8">
            <h3 className="text-lg font-semibold mb-2">About</h3>
            <ul className="text-md">
              <li>About us</li>
              <li>How it Works</li>
              <li>Security</li>
              <li>Investor</li>
              <li>Sitemap</li>
              <li>Stories</li>
              <li>News</li>
              <li>Team</li>
              <li>Awards</li>
              <li>Press Releases</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="mr-8">
            <h3 className="text-lg font-semibold mb-2">Terms</h3>
            <ul className="text-md">
              <li>Terms</li>
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
              <li>Copyright Policy</li>
              <li>Code of Conduct</li>
              <li>Fees and Charges</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Partner</h3>
            <ul className="text-md">
              <li>Partners</li>
              <li>Escrow.com</li>
              <li>Loadshift</li>
              <li>Warrior Forum</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="https://www.shutterstock.com/image-vector/collection-logos-popular-app-stores-apple-2315105307" alt="Apple App Store" className="mr-4" />
          <img src="https://www.shutterstock.com/image-vector/collection-logos-popular-app-stores-apple-2315105307" alt="Google Play Store" />
        </div>
        <p>&copy; {new Date().getFullYear()} Freelance Platform. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer