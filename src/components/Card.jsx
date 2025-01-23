

const Card = ({name,image,chapter,description}) => {
    return (
        <div
              className="w-auto group relative bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[2/1] overflow-hidden">
                <img 
                  src={image} 
                  alt="image"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                
              </div>
              
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <div className="bg-[#4d1ff3] text-white px-3 py-1 rounded-full text-sm font-bold">
                  {chapter}
                </div>
                
              </div>

              <div className="absolute top-4 right-4">
                <div className="bg-white/90 p-2 rounded-full">
                  
                </div>
              </div>

              <div className="p-6 relative">
                <h2 className="text-xl font-bold text-[#4d1ff3] mb-3 group-hover:text-[#4d1ff3] transition-colors">
                  {name}
                </h2>
                <p className="text-[#bdabff] text-sm leading-relaxed">
                 {description}
                </p>
                <div className="mt-4 flex justify-end">
                  <button className="text-[#4d1ff3] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read Chapter
                    
                  </button>
                </div>
              </div>
              <div/>
              <div className="absolute top-0 left-0 w-2 h-full bg-[#4d1ff3]" />
            </div>
    )
}

export default Card