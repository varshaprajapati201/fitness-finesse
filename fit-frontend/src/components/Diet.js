import React from 'react'
import { Link } from 'react-router-dom'

export default function Diet() {
  return (

    <div >

      <img src={require('../images/diet_b1.png')} alt="" className="dietBanner" />

<div className='container'>
      <h1 className="foodFactHeading">Food-Facts</h1>
      <div className="foodFacts">
        <div className="factContainer"> <img src={require('../images/fact1.png')} alt="" className="dietFact" />
          <p className="factInfo">Peaches Promote Healing
            Don’t be fooled by a peach’s small size and delicate skin. Just one medium peach has up to 13.2% of the vitamin C you need each day. This nutrient helps your body heal wounds and keeps your immune system going strong. It also helps get rid of “free radicals” -- chemicals that have been linked to cancer because they can damage your cells.</p>
        </div>

        <div className="factContainer">
          <img src={require('../images/fact2.png')} alt="" className="dietFact" />
          <p className="factInfo">Food allergies affect 5% to 10% of people. Peanuts (which are legumes, like beans and peas), and tree nuts, like pecans and almonds, are common triggers. If you have a severe allergy, even something that has touched nuts can cause swelling, vomiting, and diarrhea. It could even inflame your throat and make it hard to breathe or talk. This is a potentially deadly condition called anaphylactic shock.</p>
        </div>

        <div className="factContainer">
          <img src={require('../images/fact3.png')} alt="" className="dietFact" />
          <p className="factInfo">Blueberries were called “star fruits” by North American indigenous peoples because of the five-pointed star shape that is formed at the blossom end of the berry. A single blueberry bush can produce as many as 6,000 blueberries per year. British Columbia is the largest highbush blueberry growing region in the world.</p>
        </div>

        <div className="factContainer">
          <img src={require('../images/fact4.png')} alt="" className="dietFact" />
          <p className="factInfo">The yolk and the whites have the same amount of protein.
            'Cage-free' eggs may come from hens that live in cages.
            All eggs are hormone-free.
            The reason eggs are blue isn't too appealing.
            How thick an eggshell is will depend on the age of the laying hen.</p>
        </div>
      </div>
</div>


      <div className="qna">
        <h1 className="qnaHeading">Q&A</h1>
        <div className="qnaContainer">
          <div className="qnaQues">
            <h5 className="ques">I'm trying to watch my portion sizes. What's the best way to do that at home?</h5>
            <h4 className="ans">
              You can mind portion sizes at home if you: Use smaller dishes at meals; Serve food in the right portion amounts, and don't go back for seconds; Put away any leftovers in separate, portion-controlled amounts...
            </h4>
          </div>
          <div className="qnaQues">
            <h5 className="ques">What is the difference between cage-free vs. free range vs. organic?
            </h5>
            <h4 className="ans">
              You may see eggs, poultry, or meats labeled cage free, free range, or organic. Here's what they mean: Cage free means hens are still in a closed space but have room to walk around. Free range means...
            </h4>
          </div>
          <div className="qnaQues">
            <h5 className="ques">What are some healthier substitutes for salty, crunchy snacks like chips?
            </h5>
            <h4 className="ans">
              Instead of chips, try: Nuts. Who doesn’t love a salty snack once in a while? But that bag of potato or corn chips is full of salt and, often, unhealthy saturated or trans fats. These can raise your odds of heart disease. Nuts like cashews provide heart-healthy unsaturated fats...
            </h4>
          </div>
        </div>
      </div>


      <div className="beverage">
        <h1>Beverage-Facts</h1>
        <h3>Protein Shakes: Do You Need Them?</h3>
        <img src={require('../images/beverage.png')} alt="" className="beverageBanner" />
        <p>Are protein shakes right for you? What's in them, and what should you look for if you're trying to choose one?

          Almost everyone can get enough protein from foods. Healthy adults should get about 45 to 56 grams of protein a day.

          If you exercise regularly, you may need more calories and protein -- from any source.

          Protein shakes are used mainly by athletes who need nourishment right after their workouts, says Jose Antonio, chief executive officer and co-founder of the International Society of Sports Nutrition (ISSN).

          Protein shakes can range in their protein content, but all contain some carbohydrates and maybe a little fat. They come a variety flavors in powder form or in ready-to-drink packages, such as cans or foil packs.

        </p>
      </div>
      {/* <h1 className="diet">Diet</h1> */}
      <div className="dietContainer">
        <div>
        <Link to="/weightGain">
          <button>
            <img src={require('../images/wl.png')} alt="" className="associateTypeImage" />
          </button>
        </Link>
        </div>
        <div>
        <Link to="/weightLoss">
          <button>
            <img src={require('../images/wt.png')} alt="" className="associateTypeImage" />
          </button>
        </Link>
        </div>
        <div>
        <Link to="/proteinSource">
          <button>
            <img src={require('../images/pro.png')} alt="" className="associateTypeImage" />
          </button>
        </Link>
      </div>
      </div>



    </div>


  )
}
