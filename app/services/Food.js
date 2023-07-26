const foodData= [
    {
        id: 1,
        name:"Banana",
        type: 'Fruit',
        price: 10,
        image: require('../assets/banana.jpg'),
        description: 'Rich in potassium, which is essential for heart health and blood pressure regulation and helps to prevent osteoporosis. Bananas are a great energy source due to their natural sugars (fructose, glucose, and sucrose) and carbohydrates. They can provide a quick energy boost and are a favorite among athletes and fitness enthusiasts. Bananas contain tryptophan, an amino acid that the body converts to serotonin, a neurotransmitter known for its mood-enhancing effects. Eating bananas can help improve mood and reduce symptoms of depression.',
        quantity: 0
    },
    {
        id: 2,
        name:"Brocoli",
        type: 'Vegetable',
        price: 15,
        image: require('../assets/brocoli.jpg'),
        description: 'Rich in essential nutrients: Broccoli is packed with vitamins and minerals, including vitamin C, vitamin K, vitamin A, vitamin B6, folate, potassium, and manganese. It also contains fiber and antioxidants, making it a nutrient-dense food. Broccoli is an excellent source of various antioxidants, such as sulforaphane, quercetin, and kaempferol. These compounds help neutralize harmful free radicals in the body, reducing oxidative stress and inflammation. May have anti-cancer properties: Some studies suggest that certain compounds in broccoli, such as sulforaphane, may have anticancer properties by inhibiting the growth of cancer cells and promoting detoxification of harmful substances in the body.',
        quantity: 0
    },
    {
        id: 3,
        name:"Carrot",
        type: 'Vegatable',
        price: 10,
        image: require('../assets/carrot.jpg'),
        description: 'Carrots are an excellent source of essential vitamins and minerals. They are particularly high in vitamin A, providing the body with a natural source of beta-carotene, which is important for good vision, especially in low-light conditions. Vitamin A is also essential for maintaining healthy skin and a robust immune system. The antioxidants and vitamin C in carrots support collagen production, which is crucial for maintaining skin elasticity and preventing signs of aging. Regular consumption of carrots can help keep the skin looking healthy and youthful. Chewing on raw carrots can stimulate saliva production, which helps in neutralizing acid and reducing the risk of cavities and tooth decay. The minerals present in carrots also contribute to overall oral health.',
        quantity: 0
    },
    {
        id: 4,
        name:"Cauliflower",
        type: 'Vegetable',
        price:80,
        image: require('../assets/cauliflower.jpg'),
        description: 'Contains antioxidants and anti-inflammatory compounds that may reduce the risk of chronic diseases.It contains dietary fiber, which aids in digestion and helps maintain bowel regularity. Fiber also contributes to a feeling of fullness, which can be beneficial for weight management. Cauliflower is incredibly versatile and can be used in various dishes, such as roasted cauliflower, cauliflower rice, cauliflower mash, and as a substitute for rice or pizza crust. As with any food, the benefits of cauliflower are best obtained when it is part of a balanced and varied diet. So, consider incorporating cauliflower and other colorful vegetables into your meals for optimal health benefits.',
        quantity: 0
    },
    {
        id: 5,
        name:"Grapefruit",
        type: 'Fruit',
        price: 25,
        image: require('../assets/grapefruit.jpg'),
        description: 'Low in calories and high in vitamins (C, A), contributing to skin health and immune support.  The vitamin C and antioxidants in grapefruit can benefit the skin by promoting collagen production, improving skin elasticity, and protecting against sun damage. With its high water content, grapefruit can help keep you hydrated, contributing to overall well-being and supporting bodily functions. Grapefruit is often associated with weight loss due to its low calorie content and high water content. Studies have suggested that including grapefruit in your diet may help reduce overall calorie intake and support weight loss efforts.',
        quantity: 0
    },
    {
        id: 6,
        name:"Green Apple",
        type: 'Fruit',
        price: 10,
        image: require('../assets/green-apple.jpg'),
        description: 'Green apples are a good source of essential nutrients, including vitamin C, vitamin A, potassium, and dietary fiber. These nutrients play a vital role in supporting overall health and well-being. The dietary fiber in green apples promotes healthy digestion by aiding in regular bowel movements and preventing constipation. Fiber also supports gut health by promoting the growth of beneficial gut bacteria. Chewing on apples stimulates saliva production, which helps wash away bacteria and food particles, reducing the risk of tooth decay.',
        quantity: 0
    },
    {
        id: 7,
        name:"Green Grapes",
        type: 'Fruit',
        price: 20,
        image: require('../assets/green-grapes.jpg'),
        description: 'Contains vitamins (C, K) and minerals, promoting overall well-being. Rich in antioxidants, including resveratrol, which may support heart health. Resveratrol, found in green grapes, has been associated with promoting heart health. It may help lower blood pressure, reduce LDL cholesterol levels, and improve blood vessel function.',
        quantity: 0
    },
    {
        id: 8,
        name:"Green Pepper",
        type: 'Vegetable',
        price: 15,
        image: require('../assets/green-pepper.jpg'),
        description: 'Excellent source of vitamins (C, A) and antioxidants, supporting immune function and skin health.',
        quantity: 0
    },
    {
        id: 9,
        name:"Kiwi",
        type: 'Fruit',
        price: 15,
        image: require('../assets/kiwi.jpg'),
        description: 'High in vitamin C, promoting immune health and skin collagen production.',
        quantity: 0
    },
    {
        id: 10,
        name:"Lettuce",
        type: 'Vegetable',
        price: 35,
        image: require('../assets/lettuce.jpg'),
        description: 'Low in calories and rich in vitamins (K, A), supporting bone and eye health.',
        quantity: 0
    },
    {
        id: 11,
        name:"Naartjie",
        type: 'Fruit',
        price: 20,
        image: require('../assets/naartjie.jpg'),
        description: 'Naartjie is an excellent source of vitamin C, an essential nutrient that supports the immune system, promotes skin health, and acts as an antioxidant, protecting the body from free radical damage.',
        quantity: 0
    },
    {
        id: 12,
        name:"Orange",
        type: 'Fruit',
        price: 25,
        image: require('../assets/orange.jpg'),
        description: 'High in vitamin C, supporting the immune system and skin health. Contains antioxidants that protect against cell damage.',
        quantity: 0
    },
    {
        id: 13,
        name:"Papaya",
        type: 'Fruit',
        price: 30,
        image: require('../assets/papaya.jpg'),
        description: 'Rich in vitamin C and antioxidants, supporting immune function and skin health.',
        quantity: 0
    },
    {
        id: 14,
        name:"Potatoe",
        type: 'Vegetable',
        price: 28,
        image: require('../assets/potato.jpg'),
        description: 'Good source of complex carbohydrates and dietary fiber, providing sustained energy and aiding digestion.',
        quantity: 0
    },
    {
        id: 15,
        name:"Purple Cabbage",
        type: 'Vegetable',
        price: 50,
        image: require('../assets/purple-cabbage.jpg'),
        description: 'Contains antioxidants called anthocyanins, which have anti-inflammatory properties.',
        quantity: 0
    },
    {
        id: 16,
        name:"Red Apple",
        type: 'Fruit',
        price: 10,
        image: require('../assets/red-apples.jpg'),
        description: 'Red apples are packed with essential nutrients, including dietary fiber, vitamin C, potassium, and various antioxidants. These nutrients support overall health and well-being.  Red apples contain various antioxidants, such as quercetin and flavonoids, which help neutralize harmful free radicals in the body. Antioxidants play a role in reducing oxidative stress and inflammation, potentially lowering the risk of chronic diseases. The fiber in red apples can help regulate blood sugar levels and prevent spikes in blood glucose after a meal. This benefit can be particularly valuable for individuals with diabetes or those at risk of developing diabetes.',
        quantity: 0
    },
    {
        id: 17,
        name:"Red Grapes",
        type: 'Fruit',
        price: 20,
        image: require('../assets/red-grapes.jpg'),
        description: 'Similar benefits to green grapes but may contain different antioxidants due to different pigments.',
        quantity: 0
    },
    {
        id: 18,
        name:"Red Pepper",
        type: 'Vegetable',
        price: 50,
        image: require('../assets/red-pepper.jpg'),
        description: 'Rich in vitamin C and antioxidants, supporting the immune system and promoting skin health.',
        quantity: 0
    },
    {
        id: 16,
        name:"Strawberry",
        type: 'Fruit',
        price: 30,
        image: require('../assets/strawberry.jpg'),
        description: 'High in vitamin C and antioxidants, supporting the immune system and skin health.',
        quantity: 0
    },
    {
        id: 17,
        name:"Tomatoe",
        type: 'Vegetable',
        price: 20,
        image: require('../assets/tomatoes.jpg'),
        description: 'Tomatoes are an excellent source of antioxidants, such as vitamin C, vitamin E, and beta-carotene. These antioxidants help combat free radicals in the body, reducing oxidative stress and cellular damage.',
        quantity: 0
    },

]

export default foodData;

