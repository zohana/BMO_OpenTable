1.How long did you spend on the coding assignment? 
What would you add to your solution if you had more time? If you didn't spend much time on the coding test
then use this as an opportunity to explain what you would add.
--> I spent six hours. 

2. What was the most useful feature that was added to the latest version of your
chosen language? Please include a snippet of code that shows how you&#39;ve used
it.
--> Fat arrows, object destructuring.
renderCards = () => {
    return this.state.restraunts.map((restraunt) => {
      return (
        <Card
          image={restraunt.image_url}
          imageName={restraunt.name}
          rName={restraunt.name}
          rlocation={restraunt.address}
          key={restraunt.id}
        />
      );
    });
  };

3. How would you track down a performance issue in production? Have you ever
had to do this?
--> using Audit feature of dev tools. I have used it while working on project at RBC.

4. How would you improve the API that you just used?
--> I would add name and address combined into one parameter.

5. Please describe yourself using JSON.
{
  "name": "Priyanka Gite",
  "occupation": "Software Engineer",
  "skills": [
    "JavaScript",
    "ReactJS",
    "Angular",
    "ResponsiveDesign",
    "HTML/CSS"
  ],
  "professionalExperience": [
    { 
      "company": "Prodigy Labs", 
      "from": "2019", 
      "to": "2020" 
    },
    {
      "company": "Dealertrack",
      "from": "2018",
      "to": "2019"
    },
    {
      "company": "travelcoup",
      "from": "2017",
      "to": "2018"
    }
  ]
}
