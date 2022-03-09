import { HeroList } from "../hero/HeroList"


export const DcScreen = () => {
  return (
    <div>
      <div className="mt-2 bg-dark text-secondary px-4 py-5 text-center">
        <div className="py-5">
        <h1 className="display-5 fw-bold text-white">DC Heroes</h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5 mb-4"> 
              Check a list with awesome DC Heroes!
            </p>
          </div>
        </div>
                   
      </div>

      <div className="mt-2 pb-4">
        <HeroList publisher="DC Comics"/>
      </div>
        <hr/>
        
    </div>
  )
}
