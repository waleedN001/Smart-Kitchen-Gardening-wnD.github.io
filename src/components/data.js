import strawberry from './img/fruit/strawberry.jpg';
import peach from './img/fruit/peach.jpg';
import pomeganate from './img/fruit/pomeganate.jpg';
import mango from './img/fruit/mango.jpg';
import lemon from './img/vegetable/lemon.jpg';
import onion from './img/vegetable/onion.jpg';
import tomato from './img/vegetable/tomato.jpg';
import garlic from './img/vegetable/garlic.jpg';
import sunflower from './img/flower/sunflower.jpg';
import canna from './img/flower/canna.jpg';
import lily from './img/flower/lily.jpg';
import roses from './img/flower/roses.jpg';
import cardamom from './img/herbs/cardamom.jpg';
import ginger from './img/herbs/ginger.jpg';
import podina from './img/herbs/podina.jpg';
import turmeric from './img/herbs/turmeric.jpg';
import bougainvillea from './img/climber/bougainvillea.jpg';
import certainCreeper from './img/climber/certainCreeper.jpg';
import goldenShower from './img/climber/goldenShower.jpg';
import vineVirgin from './img/climber/vineVirgin.jpg';

const data={
    cardData:[
        {
            id:1,
            img:peach,
            title: 'peach',
            category:'Fruit',
		    temp: 'Peach trees grow best in climates with hot summers and winter temperatures colder than 45°F.',
            soil: 'Peach trees cannot survive in waterlogged soil, so up to two feet (0.5 m.) of sandy, loamy, fertile topsoil works best, even if the subsoil contains a bit more clay.',
            desc: 'The peach is a deciduous tree native to the region of Northwest China between the Tarim Basin and the north slopes of the Kunlun Mountains, where it was first domesticated and cultivated. It bears edible juicy fruits with various characteristics, most called peaches and others, nectarines.',
            Vitamins: 'Mature peach trees mostly require nitrogen (N) and potassium (K), the two nutrients found at higher concentrations in fruits.',
            Space: 'If you are planting standard-size trees, space them 15 to 20 feet apart. Space dwarf trees 10 to 12 feet apart. Most types of peach trees are self-fertile, so planting one tree is all thats needed for fruit production',

        },
        {
            id:2,
            img:strawberry,
            title: 'strawberry',
            category:'Fruit',
		    temp: 'The ideal temperature for garden strawberries is between 60 degrees and 80 degrees Fahrenheit.',
            soil: 'Strawberries grow best in a deep, sandy loam soil rich in organic matter. The soil must be well-drained. Keep away from areas that remain wet late into the spring. The site should receive full sunlight and have a gradual slope.',
            desc: 'The garden strawberry is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries, which are cultivated worldwide for their fruit. The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness.',
            Vitamins: 'Strawberries are rich in vitamin C and other antioxidants.',
            Space: 'Space plants 12 to 18 inches apart. Strawberries are self-fertile, but require bees for pollination. Remove some of the runners throughout the season or your strawberry plants will take over your yard. After removing flowers for a few weeks after planting, you can pick fruit later that summer.',

        },{
            id:3,
            img:pomeganate,
            title: 'pomeganate',
            category:'Fruit',
		    temp: 'Favorable temperatures for professional planting and cultivation of Pomegranate 38 °C (41-100 °F)',
            soil: 'Pomegranates perform best on deep loamy soils, but will still grow quite well in sandy and clay soils.',
            desc: 'The garden pomeganate is a widely grown hybrid species of the genus Fragaria, collectively known as pomegranate, which are cultivated worldwide for their fruit. The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness.',
            Vitamins: 'Pomegranates are a good source of vitamin C, vitamin K, and potassium, as well as several other key nutrients.',
            Space: 'The spacing will depend on how you plan to use your pomegranate tree. Some growers use them as a spreading shrub hedge, and they can be spaced around 6 to 9 feet apart.',

        },{
            id:4,
            img:mango,
            title: 'mango',
            category:'Fruit',
		    temp: 'July-August in rainfed areas and during February-March in irrigated areas. In case of heavy rainfall zones, planting is taken up at the end of the rainy season.',
            soil: 'Clay, sand and loam are all good soils for growing mangos, as long as the trees are planted deeply and the roots arent over-watered. A range of pH between 5.5 and 7.5 will successfully produce mangos',
            desc: 'Mango fruit is utilized at all stages of its development both in its immature and mature state. Raw fruits are used for making chutney, pickles, and juices. The ripe fruits besides being used for dessert are also utilized for preparing several products like squashes, syrups, nectar, jams, and jellies',
            Vitamins: 'Mango fruits are a rich source of vitamins A, C, and D. There is also research that suggests that mangoes can help control weight, fight cancer, and improve digestion.',
            Space: 'mango the best planting distance is under: Row to row distance (E – W) = 27 feet. Plant to plant distance (N – S) = 22 feet. Average number of plants in one acre = 73.',

        },{
            id:5,
            img:lemon,
            title: 'lemon',
            category:'Vegetable',
            temp: 'The best temperature for lemon trees is between 77 and 86 degrees, and the higher side of this range will also aid the trees in photosynthesis. Lemon trees like full sun.',
            soil: 'lemon trees can tolerate a range of soils, including poor soil, most prefer well-drained, slightly acidic soil.',
            desc: 'Lemon is a plant. The fruit, juice, and peel are used to make medicine. Lemon is used to treat scurvy, a condition caused by not having enough vitamin C. Lemon is also used for the common cold and flu, H1N1 (swine) flu, ringing in the ears (tinnitus), Meniere his disease, and kidney stones.',
            Vitamins: 'Lemons are high in vitamin C, folate, potassium, flavonoids and compounds called limonins',
            Space: 'Standard-size citrus trees should be spaced 12 to 25 feet apart and dwarf citrus trees should be set 6 to 10 feet apart.',

        },{
            id:6,
            img:onion,
            title: 'onion',
            category:'Vegetable',
		    temp: 'Onion seeds germinate at temperatures above 40°F; the optimum soil temperature is 75°F.',
            soil: ' They perform best in well-drained, slightly acidic, fertile soils in full sun. Heavy soils can be improved by incorporating organic matter, such as compost, into the soil.',
            desc: 'TOnions are cultivated and used around the world. As a food item, they are usually served cooked, as a vegetable or part of a prepared savoury dish, but can also be eaten raw or used to make pickles or chutneys. They are pungent when chopped and contain certain chemical substances which may irritate the eyes.',
            Vitamins: 'This vegetable is particularly high in vitamin C, a nutrient involved in regulating immune health, collagen production, tissue repair and iron absorption.',
            Space: 'Space the plants 4 to 5 inches apart in the row to produce large-sized bulbs (closer spacing significantly decreases bulb size) or space 2 to 2.',

        },{
            id:7,
            img:tomato,
            title: 'tomato',
            category:'Vegetable',
		    temp: 'The temperatures at which tomatoes thrive are between 55 and 85 degrees Fahrenheit.',
            soil: 'Loam and sandy loam soils are best for tomato production, but these plants will grow in almost all soil types except heavy clay. If you your soil has lots of clay, you can improve the texture by tilling the soil and incorporating sand, sawdust, peat moss or other amendments before planting.',
            desc: 'Tomato fruits are consumed fresh in salads or cooked in sauces, soup and meat or fish dishes. They can be processed into purées, juices and ketchup. Canned and dried tomatoes are economically important processed products.',
            Vitamins: 'Tomato is great source of vitamin C, potassium, folate, and vitamin K..',
            Space: 'Space your tomato plants 18 inches apart (determinate one). Ideally, you should leave the space of 24 inches if possible. Tomato plants grown too close are prone to fungal diseases and are less productive.',

        },{
            id:8,
            img:garlic,
            title: 'garlic',
            category:'Vegetable',
		    temp: 'Garlic Planting Time. Garlic requires cool air temperatures of 32° to 50°F (0-10°C) during its first two months of growth when roots are established and bulbs begin to form',
            soil: 'The best soil for growing seed garlic is sandy loam that is well-drained.',
            desc: 'Garlic is the second most widely used cultivated allium after onion. It has long been recognized all over the world as a valuable spice for foods and a popular remedy for various ailments and physiological disorders.',
            Vitamins: 'Raw garlic retains higher amounts of allicin, a beneficial sulfur-containing compound. Garlic has been shown to improve immunity, stabilize blood sugar levels, and support heart and brain health.',
            Space: 'Garlic is ideally planted with six inches between cloves, both in and between rows.',

        },{
            id:9,
            img:sunflower,
            title: 'sunflower',
            category:'Flower',
		    temp: 'Optimal temperatures for growing sunflowers are between 70 and 78 degrees Fahrenheit. But they are tolerant to high heat as long as their moisture needs are met.',
            soil: 'Sunflowers prefer a somewhat alkaline soil (pH 6.0 to 7.5) and they re heavy feeders so make sure you plant them in nutrient-rich soil.',
            desc: 'The sunflower seed is the seed of the sunflower. There are three types of commonly used sunflower seeds: linoleic, high oleic, and sunflower oil seeds. Each variety has its own unique levels of monounsaturated, saturated, and polyunsaturated fats.',
            Vitamins: 'They are loaded with vitamins like Thiamine, Riboflavin, Niacin, Pantothenic acid, Folate, Choline, vitamin B6, vitamin C and vitamin E. Contain minerals like calcium, iron, magnesium, manganese, phosphorus, potassium, sodium, zinc etc',
            Space: 'Small sunflowers may require only 6 inches between each plant, while large varieties might need up to 3 feet.',

        },{
            id:10,
            img:roses,
            title: 'roses',
            category:'Flower',
		    temp: ' roses should be kept in an environment between 60 and 70 degrees Fahrenheit. As winter approaches, its important to keep in mind that container roses are more susceptible to colder weather than ground plants',
            soil: ' A loam soil is ideal—too much clay and the roots can become waterlogged, but a sandy soil will drain before the roots can get a good drink.',
            desc: 'Roses are best known as ornamental plants grown for their flowers in the garden and sometimes indoors. They have been also used for commercial perfumery and commercial cut flower crops. Some are used as landscape plants, for hedging and for other utilitarian purposes such as game cover and slope stabilization.',
            Vitamins: 'Rose petals are a good source of:Vitamin C, Iron, Calcium, Vitamin A, Vitamin E.',
            Space: 'Large shrub roses should be planted 30” to 36” apart. Each plant will cover an area of about 6 to 10 square feet. Small shrub roses should be planted 24” to 30” apart. Each plant will cover an area of about 4 to 6 square feet.',

        },{
            id:11,
            img:lily,
            title: 'lily',
            category:'Flower',
		    temp: 'Lilies can withstand heat into the 90-degree Fahrenheit temperatures and stand up to cold below freezing level. Tropical regions can be a problem since lilies need a cold season that drops below 65 degrees Fahrenheit for at least eight weeks.',
            soil: 'Sandy potting mix – Lilies do best in partially sandy soils. Potting mixes that are mostly peat will stay too wet and again cause bulb rot.',
            desc: 'The lily is an alkalising flower on the skin, and regulates pH levels, making the skin glow naturally. It helps prevent fine lines, wrinkles and premature ageing, and also soothes the scalp, promoting hair growth and thick, shiny hair.',
            Vitamins: 'White lily is an herb. The root and bulb are used to make medicine. People take white lily for pain, swelling, water retention (edema), bleeding, and cough.',
            Space: 'Space bulbs at a distance equal to three times the bulbs diameter usually about 8 to 18 inches apart, depending on the variety.',

        },{
            id:12,
            img:canna,
            title: 'canna',
            category:'Flower',
		    temp: 'Keep the rhizomes at a temperature of 10-16°C (50-60°F), such as in a heated greenhouse or sunny conservatory.',
            soil: 'anna lilies do best in a rich, moisture-retentive soil in full sun or light shade. In the garden theyre perfect for the back or middle of a mixed or tropical border.',
            desc: 'beautiful plant in your garden known as the Canna is edible. The flower, foliage and the rhizome are all edible and when baked or broiled, Cannas have a similar taste to a water chestnut or a plain potato.',
            Vitamins: 'Canna can be used to treat menstrual pains. The root can be used to treat gonorrhea and amenorrhoea.',
            Space: '18-24 inches between plants in the landscape. If growing cannas in containers, select a container that is at least 18 inches in diameter.',

        },{
            id:13,
            img:podina,
            title: 'podina',
            category:'Herbs',
		    temp: 'The ideal temperature for seed germination should range from 20 C to 23C. Mint seeds take 15 to 20 days to germinate depending on the soil temperature.',
            soil: 'Pudina can grow well in almost all kinds of soils. The soil needs to be fertile, well-draining, and rich in organic matter. The soils with pH ranging between 6.0 -7.0 are good for its growth.',
            desc: 'It is one of the rich sources of iron, potassium, and manganese which improves haemoglobin levels and promotes brain function.',
            Vitamins: 'Mint leaves are packed with antioxidants and phytonutrients, and contains vitamin A, vitamin C, and B-complex, phosphorous, calcium, and has anti-bacterial properties.',
            Space: 'Space mint plants 18 to 24 inches apart. Its best to grow them in pots to keep them from taking over your garden',

        },{
            id:14,
            img:cardamom,
            title: 'cardamom',
		    temp: 'Cardamom plants will die if they in direct sunlight,temperatures stay between 65 and 95 degrees Fahrenheit and humidity levels stay as high as 75% humidity.',
            soil: 'Cardamom grows luxuriantly in forest loam soils, which are generally acidic in nature with a pH range of 5.5-6.5. Growth of cardamom is enhanced.',
            desc: 'The most common way to use cardamom is in cooking or baking. It very versatile and often added to Indian curries and stews, as well as gingerbread cookies, bread and other baked goods.',
            Vitamins: 'It also contains the following quantities of vitamins and minerals: potassium: 64.9 milligrams (mg) calcium: 22.2 mg. iron: 0.81 mg.',
            Space: 'The yield of Cardamom per acre. Cardamom starts yielding at 2-3 years after planting. The yield stabilizes after the fourth year. During second year it yields at an average of 50 kg per acre, at third year it yields 145 Kg per acre and in the fourth year, it yields 200 kg per acre.',

        },{
            id:15,
            img:turmeric,
            title: 'turmeric',
            category:'Herbs',
		    temp: 'The ideal temperature range for growing turmeric is between 68-95 F (20-35 C). When the temperature drops below 50 F (10 C), the plant suffers.',
            soil: 'Like ginger, turmeric thrives in warm, humid conditions and well-drained, neutral soil.',
            desc: 'Turmeric — and especially its most active compound, curcumin — have many scientifically proven health benefits, such as the potential to improve heart health and prevent against Alzheimers and cancer. Its a potent anti-inflammatory and antioxidant. It may also help improve symptoms of depression and arthritis.',
            Vitamins: 'Turmeric is also rich in vitamin C, vitamin B6, and other antioxidants that reduce the risk of serious health conditions like heart disease and diabetes.',
            Space: 'Plant turmeric in September or October, into a warm soil. The rhizomes should be planted 5-7 cm deep. It is often planted on ridges, usually about 30-45 cm apart and with 15-30 cm between plants.',

        },{
            id:16,
            img:ginger,
            title: 'ginger',
            category:'Herbs',
		    temp: 'Indoors or out, both grow best at temperatures of at least 68 degrees Fahrenheit and should not be exposed to temperatures below 50. Both ginger and turmeric grow from a rhizome (a fleshy root) that is the edible part of the plant. ',
            soil: 'The best soil for ginger is loose, loamy, and rich in organic matter. Loamy soils allow water to drain freely, which will help prevent the rhizomes from becoming waterlogged. Thick mulch can also provide nutrients, retain water, and help control weeds.',
            desc: 'Ginger has been used in alternative medicine as a possibly effective aid in treating nausea and vomiting after surgery, dizziness, menstrual pain, arthritis, preventing morning sickness. Ginger has also been used for weight loss and to prevent motion sickness and seasickness.',
            Vitamins: 'Ginger is loaded with antioxidants, compounds that prevent stress and damage to your body DNA. They may help your body fight off chronic diseases like high blood pressure, heart disease, and diseases of the lungs, plus promote healthy aging',
            Space: 'Plant the rhizomes 6 to 8 inches apart, 2 to 4 inches deep, and with the growth buds pointing upward. They can be planted whole or in smaller pieces with a couple of growing buds each. Ginger plants will grow to about 2 to 3 feet tall.',

        },{
            id:17,
            img:bougainvillea,
            title: 'Bougainvillea',
            category:'Climber',
		    temp: 'Bougainvillea is a relatively hardy plant, able to withstand a range of temperatures, from tropical highs of 80 degrees Fahrenheit and above, all the way down to 40 degrees Fahrenheit.',
            soil: 'Peat moss retains moisture and may cause the bougainvillea to get root rot. A potting mix designed for palms or cactus is ideal. Choose a container that has drain holes.',
            desc: 'The aqueous extract and decoction of this plant have been used as fertility control among the tribal people in many countries. Furthermore, it has been shown to possess anticancer, antidiabetic, antihepatotoxic, anti-inflammatory, antihyperlipidemic, antimicrobial, antioxidant, and antiulcer properties',
            Vitamins: 'Bougainvillea is not only said to help with a cough, sore throat, and bronchitis. It can also help flu, fever, diarrhea, diabetes, and hepatitis.',
            Space: 'The ideal distance between bougainvillea plants varies with the variety, but in general, the large vines need at least 5 to 10 feet between plants, while the smaller types can be as little as 3 feet apart.',

        },{
            id:18,
            img:certainCreeper,
            title: 'certain Creeper',
            category:'Climber',
		    temp: 'Planting from seed, the vine will need temperatures over 65 degrees Fahrenheit in order to germinate. Generally, a consistent summer temperature above 70 degrees Fahrenheit will have your vine performing its best.',
            soil: 'Lots and lots of water, that what you need at the start. As you begin to see the stem, water regularly and add mulch to ensure that the soil doesnt dry out. Keep the weeds away to make sure that the foliage growth is healthy and can last through the season. Read to know about how light affects the growth of plants',
            desc: 'Climbing plants are a beautiful addition to any garden and provide depth and complexity to simple gardening spaces. They also provide shade on those warm summer days. When harvesting these plants indoors, the benefits include: Reduced stress and increased sense of well-being.',
            Vitamins: 'Rumor has it that tribulus is also known as puncture vine because the spines ... Next to red peppers, you can get the most vitamin C.',
            Space: 'Creepers require a garden bed to grow, but if you do not have a full-fledged garden they can also be grown in pots and plant them during spring to see it bloom in summer.',

        },{
            id:19,
            img:goldenShower,
            title: 'Golden Shower',
            category:'Climber',
		    temp: 'Place the container in a bright area that gets sunlight and make sure the soil temperature does not drop below 75 degrees Fahrenheit.',
            soil: 'Golden-Shower should be grown in full sun on well-drained soil. The trees are moderately drought- and salt-tolerant. Although Golden-Shower is damaged by temperatures falling slightly below freezing.',
            desc: 'Golden shower has been used mainly for medicinal purposes. In particular, ripe pods and seeds are used as a laxative. The root, bark, leaves, and fruit pulp have laxative properties as well but to a lesser extent. Powdered seeds can be used in the treatment of amoebiasis and bark extracts against inflammation',
            Vitamins: 'Golden shower tree treats constipation, skin disease, swelling, diabetes & cholesterol level. Reduces anxiety and fatigue.',
            Space: 'Golden shower is a fast-growing tree which reaches 30 to 40 feet in height and 30 to 40 feet wide. The well-spaced branches are clothed with pinnately compound leaves, with leaflets up to eight inches long and 2.5 inches wide.',

        },{
            id:20,
            img:vineVirgin,
            title: 'Vine virgin',
            category:'Climber',
		    temp: 'Keep the rhizomes at a temperature of 10-16°C (50-60°F), such as in a heated greenhouse or sunny conservatory.',
            soil: 'Virgin prefers partial sun, moist to mesic conditions and loam soil.',
            desc: 'Clematis virginiana is a vine of the Ranunculaceae native to North America from Newfoundland to southern Manitoba down to the Gulf of Mexico. The rationale for some of the common names is unclear, as they include examples normally applied to unrelated plants, including twining parasites.',
            Vitamins: 'Woodbine is an herb. The leaves are used to make medicine. Despite serious safety concerns, people take woodbine for skin sores, cuts',
            Space: 'plant Virgin is a native vine that lights up the fall landscape with silky, feather-like seed heads. The long vines can extend up to 10 feet, producing abundant clusters of small white flowers in midsummer which for about a month.',

        }
    ]

}
export default data;