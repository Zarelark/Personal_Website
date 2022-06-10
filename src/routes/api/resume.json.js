export const get = async () => {
    // Return body (200 is implicit) (Sveltekit will convert to json and set proper headers automatically)
    return {
		body: resume
  }
}

let resume = {
	"basics":{
		"name":"Nathan Taylor",
		"label":"Computer Science Graduate Student at UPenn",
		"image":"https://avatars.githubusercontent.com/u/67612020?v=4",
		"email":"nathansherwoodtaylor@gmail.com",
		"phone":"",
		"url":null,
		"summary":"Nathan comes to computer science and software engineering from a strong background in math and science. He studied physics as an undergraduate and then spent a year pursuing a PhD in mechanical engineering before pursuing his passion in computer science. Nathan is a Philadelphia native and a current master's student at the University of Pennsylvania.",
		"profiles":[
			{
				"network":"GitHub",
				"username":"Zarelark",
				"url":"https://github.com/Zarelark"
			},
			{
				"network":"LinkedIn",
				"url":"https://www.linkedin.com/in/nathan-sherwood-taylor/",
				"username":"nathan-sherwood-taylor"
			}
		],
		"headline":"",
		"blog":null,
		"yearsOfExperience":null,
		"username":"Zarelark",
		"locationAsString":"Philadelphia, Pennsylvania",
		"region":"Philadelphia, Pennsylvania",
		"karma":14,
		"id":"0404778c-144c-4921-a514-36cb5b44e82e",
		"followers":0,
		"following":0,
		"picture":"https://avatars.githubusercontent.com/u/67612020?v=4",
		"website":null
	},
	"skills":[
		{
			"name":"Science",
			"level":"Advanced",
			"keywords":[
				"Data Science",
				"Data Visualization",
				"Physics",
				"Mathematical Modeling",
				"Error Anlysis",
				"statistical assesment",
				"Mathematics",
				"Chemistry",
				"COMSOL",
				"Research",
				"Model",
				"Telescope",
				"MATLAB",
				"Simulation",
				"LaTeX"
			],
			"rating":4,
			"yearsOfExperience":5
		},
		{
			"name":"Web Development",
			"level":"Learning",
			"keywords":[
				"Javascript",
				"HTML",
				"CSS",
				"SASS",
				"Svelte",
				"SvelteKit",
				"API",
				"Restful"
			],
			"rating":4,
			"yearsOfExperience":1
		},
		{
			"name":"Software Development",
			"level":"Beginner",
			"keywords":[
				"Software Engineering",
				"Python",
				"Java",
				"C",
				"Computer Science",
				"Computer System"
			],
			"rating":3,
			"yearsOfExperience":1
		},
		{
			"name":"Communication",
			"level":"Intermediate",
			"keywords":[
				"Writing",
				"Taught",
				"Teach",
				"Speak",
				"Author"
			],
			"rating":0,
			"yearsOfExperience":5
		}
	],
	"projects":[
		{
			"name":"Radiomics Analysis",
			"description":"I built a Machine Learning model in MATLAB and it trained to detect breast cancer in MRI images. I then statistically compared the performance of this model to istelf when it was restricted to using only the main lesion metric that human radiologists use.",
			"url":"https://pubmed.ncbi.nlm.nih.gov/29754995/",
			"highlights":[
				"Built a Linear Discrimant Analysis (LDA) Machine Learning Model in MATLAB",
				"Trained the model on a dataset of over 600 labeled MRI images.",
				"Performed a statistical assesment of the model using K-crossfold validation and receiver operating curve analysis",
				"Including extra data in the images that is not conventionally used by radiologists significantly improved the ability of the model to distiguish between benign and luminal A cancers."
			],
			"keywords":[
				"Machine Learning",
				"Statistics",
				"MATLAB",
				"AI",
				"Artificial Inteligence",
				"CAD",
				"CADx",
				"Medicine",
				"Radiology",
				"Radiomics"
			],
			"roles":"Researcher and Coauthor ",
			"endDate":"2019-02-01",
			"startDate":"2017-01-01",
			"entity":"",
			"type":"",
			"displayName":"Radiomics Analysis",
			"website":"https://pubmed.ncbi.nlm.nih.gov/29754995/",
			
		},
		{
			"name":"Coil Pump Simulation",
			"description":"I overhauled and optimized a simulation of a coil pump that was built in Excel with extensive use of VBA macros. I also derived an equation to describe the performance of the coil pump based on several parameters.",
			"url":"https://arc.aiaa.org/doi/10.2514/6.2021-3371",
			"highlights":[
				"Worked with highly unreadable code, and refactored it to make it much more readable and easier to maintain.",
				"Eliminated crashing in the simulaion and made it run 20% faster.",
				"Implemented the ability to run multiple simulations over a parameter space in batch mode.",
				"Redesigned the optimization algorithm using gradient descent."
			],
			"keywords":[
				"Machine Learning",
				"Excel",
				"AI",
				"Artificial Inteligence",
				"Python",
				"VBA",
				"Physics",
				"Math",
				"Simulation",
				"Modeling"
			],
			"roles":"Researcher",
			"endDate":"2018-09-01",
			"startDate":"2018-06-01",
			"entity":"",
			"type":""
		},
		{
			"name":"Personal Website and Blog",
			"description":"I built this website from scratch using SvelteKit, Svelte, SASS, and of course JavaScript, HTML, and CSS. Read more about how I did it soon in an upcoming blog post. ",
			"url":"https://github.com/Zarelark/Personal_Website",
			"highlights":[
				"The initial website structure and blog functionality was implemented based on this excellent blog post by Josh Collinsworth: https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog.",
				"The resume viewer fetches resume data in JSON Resume format and uses it to populate the page. The skills section of the resume data are rendered as buttons that allow the user to sort the resume for work experiences and projects that pertain to that skill."
			],
			"keywords":[
				"Web Development",
				"Svelte",
				"SvelteKit",
				"HTML",
				"Javascript",
				"Version Control",
				"GIT",
				"CSS",
				"SASS",
				"Front-end",
				"API",
				"Restful",
				"rest"
			],
			"roles":"Developer",
			"startDate":"2022-06-01",
			"endDate":"2023-06-01",
			"entity":"",
			"type":"",
		}
	],
	"work":[
		{
			"name":"Drexel University College of Engineering",
			"location":"Philadelphia, Pennsylvania, United States",
			"description":"",
			"position":"Graduate Research Assistant",
			"url":"https://www.linkedin.com/school/drexel-engineering/",
			"startDate":"2020-09-01",
			"endDate":"2021-06-01",
			"summary":"As part of my PhD program at Drexel, I conducted novel research in the mechanical engineering field. During my time there, I was involved in two research projects, one attempting to develop a novel 3D printing technology and the other investigating a potential drug delivery system for prevention of airborne infectious dieseases like Covid-19.",
			"highlights":[
				"Developed a simulation using COMSOL and MATLAB of a 3D printer nozzle that uses electrohydrodynamics as the ink motivating force. The hope was that this techonolgy could eventually be used to print living tissue.",
				"Began research into using electrostatic forces for targeted delivery of drugs in the respiratory system.",
				"Applied to several national grant programs.",
				"Assisted teaching a master's level and a undergraduate level course."
			],
			"isCurrentRole":false,
			"start":{
				"year":2020,
				"month":9
			},
			"end":{
				"year":2021,
				"month":6
			},
			"company":"Drexel University College of Engineering",
			"website":"https://www.linkedin.com/school/drexel-engineering/"
		},
		{
			"name":"SofterWare, Inc.",
			"location":"Greater Philadelphia Area",
			"description":"",
			"position":"Technical Support Representative",
			"url":"https://www.linkedin.com/company/softerware-inc-/",
			"startDate":"2019-10-01",
			"endDate":"2020-06-01",
			"summary":"In this client facing position, I assisted customers in their use of SofterWare's Donor Relationship Management software.",
			"highlights":[
				"Fielded phonecalls and chat sessions from customers and gave direct support on all areas of the software while maintaing an excellent net promoter score.",
				"Developed a series of new text shortcut tools that work in browser to improve representative chat response times and consistency.",
				"Assisted a company team on a data science competition on Kaggle, using Python to create 75% of the figures used in the final submission. URL: https://www.kaggle.com/davekillough/helping-small-charities-thrive."
			],
			"isCurrentRole":false,
			"start":{
				"year":2019,
				"month":10
			},
			"end":{
				"year":2020,
				"month":6
			},
			"company":"SofterWare, Inc.",
			"website":"https://www.linkedin.com/company/softerware-inc-/"
		},
		{
			"name":"Wheaton College",
			"location":"",
			"description":"",
			"position":"Observatory Teaching Assistant",
			"url":"https://www.linkedin.com/school/wheaton-college/",
			"startDate":"2016-03-01",
			"endDate":"2019-04-01",
			"summary":"While in undergrad, I worked at the college observatory. I set up, operated, and took care of three 12\" telescopes and a 24\" plane-wave telescope. Photographed astronomical phenomena using a CCD camera. Assisted students with and taught them the course material and conducted demonstrations for community members.",
			"highlights":[
				
			],
			"isCurrentRole":false,
			"start":{
				"year":2016,
				"month":3
			},
			"end":{
				"year":2019,
				"month":4
			},
			"company":"Wheaton College",
			"website":"https://www.linkedin.com/school/wheaton-college/"
		},
		{
			"name":"STLI / Scientific Technology & Language Institute",
			"location":"Bishkek, Krygyzstan",
			"description":"",
			"position":"Community Development Engineer Intern",
			"url":"https://www.linkedin.com/company/stli-scientific-technology-and-language-institute/",
			"startDate":"2018-06-01",
			"endDate":"2018-08-01",
			"summary":"Worked with a team of engineers to come alongside a community in rural Kyrgyzstan and implement a clean water system. Also, overhauled an excel based model of a coil-pump.",
			"highlights":[
				"Installed a spring capture and water delivery system in a rural village in Kyrgyzstan.",
				"Overhauled an Excel based simulation of a coil-pump, increasing its stability, performance, and features.",
				"Modeled coilpump parts using CAD."
			],
			"isCurrentRole":false,
			"start":{
				"year":2018,
				"month":6
			},
			"end":{
				"year":2018,
				"month":8
			},
			"company":"STLI / Scientific Technology & Language Institute",
			"website":"https://www.linkedin.com/company/stli-scientific-technology-and-language-institute/"
		},
		{
			"name":"Wheaton College",
			"location":"",
			"description":"",
			"position":"Nanopore Researcher",
			"url":"https://www.linkedin.com/school/wheaton-college/",
			"startDate":"2016-01-01",
			"endDate":"2018-08-01",
			"summary":"I was the principle developer finite element analysis model a protein ion-channel alpha-hemolysin. We were investigating whether such a continuum model could provide accurate results at significant performance savings compared to the usual molecural dynamics simulations.",
			"highlights":[
				"Used software such as COMSOL, MATLAB, and VMD, languages such as Java, Python, and TCL to build the model.",
				"Leveraged a functional understanding of partial differential equations, linear algebra, molecular chemistry, electrodynamics, and fluid dynamics."
			],
			"isCurrentRole":false,
			"start":{
				"year":2016,
				"month":1
			},
			"end":{
				"year":2018,
				"month":8
			},
			"company":"Wheaton College",
			"website":"https://www.linkedin.com/school/wheaton-college/"
		},
		{
			"name":"Wheaton College",
			"location":"",
			"description":"",
			"position":"Writing Fellow",
			"url":"https://www.linkedin.com/school/wheaton-college/",
			"startDate":"2018-01-01",
			"endDate":"2018-05-01",
			"summary":"Taught mini-lectures on academic writing to a STEM class and met with each student one on one to offer constructive feedback on their writing.",
			"highlights":[
				
			],
			"isCurrentRole":false,
			"start":{
				"year":2018,
				"month":1
			},
			"end":{
				"year":2018,
				"month":5
			},
			"company":"Wheaton College",
			"website":"https://www.linkedin.com/school/wheaton-college/"
		},
		{
			"name":"University of Chicago Medicine",
			"location":"",
			"description":"",
			"position":"Radiomics Researcher",
			"url":"https://www.linkedin.com/company/university-of-chicago-medicine/",
			"startDate":"2017-01-01",
			"endDate":"2017-05-01",
			"summary":"Work primarily conducted in Unix and MATLAB.",
			"highlights":[
				"Tested the robustness of computer aided diagnostic (Machine Learning) schema for diagnosing breast cancer from DCE-MRI images.",
				"Calculated the statistical benefit of including radiomic features over size alone in lesion classification tasks. "
			],
			"isCurrentRole":false,
			"start":{
				"year":2017,
				"month":1
			},
			"end":{
				"year":2017,
				"month":5
			},
			"company":"University of Chicago Medicine",
			"website":"https://www.linkedin.com/company/university-of-chicago-medicine/"
		}
	],
	"publications":[
		
	],
	"education":[
		{
			"institution":"University of Pennsylvania",
			"url":"",
			"area":"Computer and Information Technology (MCIT)",
			"studyType":"Master's",
			"startDate":"2021-09-01",
			"endDate":"2023-05-01",
			"score":"4.00",
			"courses":[
				"Software Development",
				"Data Structures and Algorithms",
				"Computer Systems",
				"Blockchain & Cryptography",
				"Computer Systems Programming",
				"Discrete Mathematics and Probability"
			],
			"description":"",
			"activities":"",
			"start":{
				"year":2021,
				"month":9
			},
			"end":{
				"year":2023,
				"month":5
			},
			"website":"",
			"gpa":"4.00"
		},
		{
			"institution":"Wheaton College",
			"url":"",
			"area":"Physics, minor in math",
			"studyType":"B.S.",
			"startDate":"2015-12-01",
			"endDate":"2019-12-01",
			"score":"3.93",
			"courses":[
				"Thermal Physics & Fluids",
				"Computer Modeling",
				"Analytical Mechanics",
				"Electromagnetic Theory",
				"Advanced Quantum Mechanics", 
				"Analog Electronics", 
				"Optics",
				"Thermodynamics",
				"Linear Algebra",
				"Vector Calculus",
				"Differential Equations",
				"Partial Differential Equations"
			],
			"description":"",
			"activities":"",
			"start":{
				"year":2015,
				"month":12
			},
			"end":{
				"year":2019,
				"month":12
			},
			"website":"",
			"gpa":"3.93"
		},
		{
			"institution":"Wheaton College",
			"url":"",
			"area":"Theology",
			"studyType":"B.A.",
			"startDate":"2015-12-01",
			"endDate":"2019-12-01",
			"score":"3.93",
			"courses":[
				
			],
			"description":"",
			"activities":"",
			"start":{
				"year":2015,
				"month":12
			},
			"end":{
				"year":2019,
				"month":12
			},
			"website":"",
			"gpa":"3.93"
		}
	],
	"volunteer":[
		
	],
	"awards":[
		
	],
	"languages":[
		{
			"language":"English",
			"fluency":"Native Speaker"
		}
	],
	"interests":[
		
	],
	"references":[
		
	],
	"certificates":[
		
	],
	"meta":{
		"note":"This is a combined version of the old and new JSON Resume API to provide maximum compatibility. You will notice duplicated values in different fields.",
		"canonical":"https://raw.githubusercontent.com/jsonresume/resume-schema/master/resume.json",
		"version":"v1.0.0",
		"lastModified":"2020-12-29T15:53:00"
	}
}