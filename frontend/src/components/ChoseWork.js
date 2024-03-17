import React from 'react'

function ChoseWork() {
    return (
        <div className='h-screen'>
            <h1 class="text-4xl font-bold  text-black  flex  justify-center items-center mt-24">Join as a client or freelancer</h1>

            <div class="flex justify-center items-center mt-24">
                <div class="max-w-md w-full mx-6 flex">
                    <div class=" border-2 border-gray-300 hover:border-green-300 rounded-lg overflow-hidden mr-8">
                        <div class="bg-white  py-4 px-4 text-center">
                            
                            <h2 class="text-black-700 mb-4 font-bold">I’m a client, hiring for a project</h2>
                            <a href='#'><button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Join Now</button></a>
                        </div>
                    </div>
                    <div class="border-2 border-gray-300 hover:border-green-300 rounded-lg overflow-hidden ml-8">
                        <div class="bg-white  py-4 px-4 text-center">
                            <h2 class="text-black-700 mb-4 font-bold">I’m a freelancer looking for work</h2>
                            <a href='#'><button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Join Now</button></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ChoseWork