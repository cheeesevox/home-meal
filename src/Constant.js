import { getOrderByID } from "./Api";

export const colors = {
	COLOR_PRIMARY: "#f96163",
	COLOR_LIGHT: "#fff",
	COLOR_DARK: "#000",
	COLOR_DARK_ALT: "#262626",
};

//  Data for categories filter

export const categories = [
	{
		id: "01",
		category: "Sky 9",
	},
	{
		id: "02",
		category: "VinHome",
	},
	{
		id:"03",
		category:"Grand Park"
	},
	{
		id:"04",
		category:"Home Meal"
	}
	,{
		id:"05",
		category:"Manchester"
	}
];

const order =[
	{
	totalamount:'50'
	}
]
const foods = [
	{
	  id: '1',
	  name: 'Salad',
	  ingredients: 'Mixed Pizza',
	  price: '8.30',
	  image: require("../assets/images/tuna.png"),


	},
	{
	  id: '2',
	  name: 'Mam Pho Mai',
	  ingredients: 'Cheese Pizza',
	  price: '7.10',
	  image: require("../assets/images/tuna.png"),


	},
	{
	  id: '3',
	  name: 'Hot dog Xuc Xich',
	  ingredients: 'Fried Chicken',
	  price: '5.10',
	  image: require("../assets/images/tuna.png"),

	},
	
  ];
  export default foods;
export const recipeList = [
	{
		id: "01",
		name: "Salad",
		image: require("../assets/images/tuna.png"),
		rating: "4.2",
		price:"2 point",
		area:"sky9",
		dish0:"thịt kho",
		typedish0:"kho",
		dish1:"cá rim",
		typedish1:"rim",
		dish2:"rau luộc",
		typedish2:"luộc",
		dish3:"Mắm cá",
		typedish3:"mắm",
		dish4:"Cơm",
		typedish4:"cơm",
		dish5:"Salad",
		typedish5:"Salad",
		color: "#006A4E",
		description:
			"Mâm cơm bao gồm thịt, cá, rau, củ đầy đủ, thành phần, Hãy liên hệ chatbox",
		
	},
	{
		id: "02",
		name: "Mâm Phô Mai",
		image: require("../assets/images/lasgana.png"),
		rating: "3.6",
		price:"2 point",
		area:"Home Meal",

		dish0:"thịt kho",
		typedish0:"kho",
		dish1:"cá rim",
		typedish1:"rim",
		dish2:"rau luộc",
		typedish2:"luộc",
		dish3:"Mắm cá",
		typedish3:"mắm",
		dish4:"Cơm",
		typedish4:"cơm",
		dish5:"Salad",
		typedish5:"Salad",
		color: "#f39c12",
		description:
			"Mâm cơm bao gồm thịt, cá, rau, củ đầy đủ, thành phần, Hãy liên hệ chatbox",
		
	},
	{
		id: "03",
		name: "Hot Dog Xúc Xích",
		image: require("../assets/images/hotdog.png"),
		rating: "4.6",
		price:"2 point",
		area:"sky9",

		dish0:"thịt kho",
		typedish0:"kho",

		dish1:"cá rim",
		typedish1:"rim",
		dish2:"rau luộc",
		typedish2:"luộc",
		dish3:"Mắm cá",
		typedish3:"mắm",
		dish4:"Cơm",
		typedish4:"cơm",
		dish5:"Salad",
		typedish5:"Salad",
		color: "#FF0000",
		// description, steps to prepare
		description:
			"Mâm cơm bao gồm thịt, cá, rau, củ đầy đủ, thành phần, Hãy liên hệ chatbox",
		
	},
	{
		id: "04",
		name: "Mâm Gà",
		image: require("../assets/images/manchurian.png"),
		rating: "3.6",
		price:"2 point",
		area:"Grand Park",

		dish0:"thịt kho",
		typedish0:"kho",
		dish1:"cá rim",
		typedish1:"rim",
		dish2:"rau luộc",
		typedish2:"luộc",
		dish3:"Mắm cá",
		typedish3:"mắm",
		dish4:"Cơm",
		typedish4:"cơm",
		dish5:"Salad",
		typedish5:"Salad",
		color: "#d35400",
		description:
			"Mâm cơm bao gồm thịt, cá, rau, củ đầy đủ, thành phần, Hãy liên hệ chatbox",
		
	},
	{
		id: "05",
		name: "Mâm gà luộc",
		image: require("../assets/images/chicken.png"),
		rating: "2.2",
		price:"2 point",
		area:"Grand Park",

		dish0:"thịt kho",
		typedish0:"kho",
		dish1:"cá rim",
		typedish1:"rim",
		dish2:"rau luộc",
		typedish2:"luộc",
		dish3:"Mắm cá",
		typedish3:"mắm",
		dish4:"Cơm",
		typedish4:"cơm",
		dish5:"Salad",
		typedish5:"Salad",
		color: "#8d4004",
		description:
			"Mâm cơm bao gồm thịt, cá, rau, củ đầy đủ, thành phần, Hãy liên hệ chatbox",
		
	},
	{
		id: "06",
		name: "Mâm Cakes",
		image: require("../assets/images/cupcakes.png"),
		rating: "5.0",
		price:"2 point",
		area:"sky9",

		dish0:"thịt kho",
		typedish0:"kho",
		dish1:"cá rim",
		typedish1:"rim",
		dish2:"rau luộc",
		typedish2:"luộc",
		dish3:"Mắm cá",
		typedish3:"mắm",
		dish4:"Cơm",
		typedish4:"cơm",
		dish5:"Salad",
		typedish5:"Salad",
		description:
			"Mâm cơm bao gồm thịt, cá, rau, củ đầy đủ, thành phần, Hãy liên hệ chatbox",
		
	},
	{
		id: "07",
		name: "Lẩu Nướng",
		image: require("../assets/images/curry.png"),
		rating: "4.8",
		price:"2 point",
		dish0:"thịt kho",
		typedish0:"kho",
		dish1:"cá rim",
		typedish1:"rim",
		dish2:"rau luộc",
		typedish2:"luộc",
		dish3:"Mắm cá",
		typedish3:"mắm",
		dish4:"Cơm",
		typedish4:"cơm",
		dish5:"Salad",
		typedish5:"Salad",
		color: "#d35400",

		description:
			"Mâm cơm bao gồm thịt, cá, rau, củ đầy đủ, thành phần, Hãy liên hệ chatbox",
		
	},
	{
		id: "08",
		name: "Mì Ramen Hảo Hảo",
		image: require("../assets/images/ramen-org.png"),
		rating: "4.2",
		price:"2 point",
		dish0:"thịt kho",
		typedish0:"kho",
		dish1:"cá rim",
		typedish1:"rim",
		dish2:"rau luộc",
		typedish2:"luộc",
		dish3:"Mắm cá",
		typedish3:"mắm",
		dish4:"Cơm",
		typedish4:"cơm",
		dish5:"Salad",
		typedish5:"Salad",
		color: "#f96163",
		description:
			"Mâm cơm bao gồm thịt, cá, rau, củ đầy đủ, thành phần, Hãy liên hệ chatbox",
		
	},

// getOrderByID()


];

