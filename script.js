// locations of places;
var locations = new Array(12);
locations = [
    ["./images/finalized/kappad.jpg", 
        "KAPPAD BEACH", 
        "Kappad, or Kappakadavu locally, is a beach near Kozhikode, in the district of the same name, Kerala, India. A stone monument installed by government commemorates the 'landing' by Vasco da Gama with the inscription, 'Vasco da Gama landed here, Kappakadavu, in the year 1498'.peaceful place and a beautiful view to enjoy time with your family, partner or just by yourself.",
        "https://www.google.com/maps/dir/National+Institute+of+Technology,+Calicut,+Calicut+Mukkam+Road,+Kattangal,+Kerala/Kappad+Beach,+Beach,+Kappad,+Kerala/@11.3365739,75.756346,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3ba642fd50000001:0xbe8a77db953bda6c!2m2!1d75.9336359!2d11.3215791!1m5!1m1!1s0x3ba6603cce555555:0x1b9c250e6688c21!2m2!1d75.7186562!2d11.3851155"
    ],
    ["./images/finalized/tali.jpg", 
        "TALI TEMPLE", 
        "Tali Lord Siva Temple is in the heart of Calicut and is an oasis in the midst of this very busy and congested city. Once inside one is at peace. It is not very old as some other temples being 600 years or so nevertheless it is worth a visit", 
        "https://www.google.com/maps/dir/National+Institute+of+Technology,+Calicut,+Calicut+Mukkam+Road,+Kattangal,+Kerala/Tali+Maha+Shiva+Kshetram,+Tali+Road,+near+Zamorins+school,+Markazudaawa,+Palayam,+Kozhikode,+Kerala/@11.2847195,75.825809,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3ba642fd50000001:0xbe8a77db953bda6c!2m2!1d75.9336359!2d11.3215791!1m5!1m1!1s0x3ba65941d72de8df:0x6390e4e6ab306f85!2m2!1d75.78754!2d11.2478818"
    ],
    ["./images/finalized/beyporebeach.jpg", 
        "BEYPORE BEACH", 
        "Beypore beach is the best place near Calicut to spend an evening, away from the crowd of the city. The pristine beach offers real tranquility and I have been to the beach with family, friends and alone. I love to walk through the walkway and watch the sunset (tough bit crowded on weekends) and taste some fish fry and roti from the shops near the beach. Sometimes we don't feel like leaving the beach and though I have been to all beaches of Kerala, I like Beypore beach better than all other beaches. There are facilities to watch sunset from a boat which will take you to the sea but I prefer to be on the beach. In April when I visited the beach it was bit humid but there were visitors and I spend almost two hours with my son there", 
        "https://www.google.com/maps/dir/National+Institute+of+Technology,+Calicut,+Calicut+Mukkam+Road,+Kattangal,+Kerala/Beypore+Beach,+Beypore,+Kerala/@11.242348,75.7926275,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3ba642fd50000001:0xbe8a77db953bda6c!2m2!1d75.9336359!2d11.3215791!1m5!1m1!1s0x3ba657682dc1d19d:0xe32e8ec12d917adf!2m2!1d75.8027405!2d11.1630543"
    ],
    ["./images/finalized/crowntheater.jpg", 
        "CROWN THEATRE", 
        "Very good theatre. excellent seats like sofa. Very close to kozhikode city. close to railway station and mananchira square", 
        "https://www.google.com/maps/dir/National+Institute+of+Technology,+Calicut,+Calicut+Mukkam+Road,+Kattangal,+Kerala/Crown+Theatre+2K+3D,+Town+Hall+Road,+Near+Town+Hall,+Mananchira,+Kozhikode,+Kerala/@11.2872894,75.820924,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3ba642fd50000001:0xbe8a77db953bda6c!2m2!1d75.9336359!2d11.3215791!1m5!1m1!1s0x3ba6593946bac6a7:0xb60969266cd9f01a!2m2!1d75.7789872!2d11.2536869"
    ],
    ["./images/finalized/hilitemall.jpg", 
        "HILITE MALL", 
        "We were travelling from Kochi to Kannur on NH66 and desperately need a refreshment and washroom break. HiLite Mall turned out to be a heaven sent break as we were getting increasingly travel weary. The mall has a good underground parking lot. We had to pay ₹20 for the one time parking. The mall is fairly large and has all the well-known brands of clothing, footwear, jewellery, electronics, cell phones, accessories, furniture and what have you. There is a gaming zone for kids and youngsters named ‘Amoeba’, and a Snow Fantasy Land where they can chill out. We headed straight to the Food Court on the top floor. They have the usual fast food chains like McDonald’s, Domino’s Pizza, Chic-King, Oh! Sandwich, Coffee shops and some Ice-Cream and Cold Drink outlets. There is a good supermarket, Malabar Fresh, where you can stock up on your groceries. However, there was no multiplex when we visited, but we heard that it is under construction in phase 2 of the expansion. The three levels of the mall are well connected with escalators and elevators. The washrooms were clean and well maintained. We were glad to have stopped here and refreshed ourselves before driving on to Kannur.",
        "https://www.google.com/maps/dir/National+Institute+of+Technology,+Calicut,+Calicut+Mukkam+Road,+Kattangal,+Kerala/HiLITE+Mall,+Kozhikode+Bypass,+Poovangal,+Kozhikode,+Kerala/@11.2844449,75.8488317,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3ba642fd50000001:0xbe8a77db953bda6c!2m2!1d75.9336359!2d11.3215791!1m5!1m1!1s0x3ba65bbe359ced81:0xc17c381f72b87e02!2m2!1d75.8335855!2d11.248533"
    ],
    ["./images/finalized/kariyathumpara.jpg", 
        "KARIYATHUMPARA", 
        "Very beautiful and scenic place in Calicut. Beat time to visit is in the morng or in the evening.. Its such a romantic place...", 
        "https://www.google.com/maps/dir/National+Institute+of+Technology,+Calicut,+Calicut+Mukkam+Road,+Kattangal,+Kerala/Kariyathumpara,+Kakkayam+Road,+Kanthalad,+Kerala/@11.4280324,75.8508883,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3ba642fd50000001:0xbe8a77db953bda6c!2m2!1d75.9336359!2d11.3215791!1m5!1m1!1s0x3ba6651b9e80789b:0x8afd0f934edf5fd1!2m2!1d75.8910626!2d11.5350249"
    ],
    ["./images/finalized/kozhikodebeach.jpg", 
        "KOZHIKODE BEACH", 
        "One of the most beautiful beaches in Kerala if properly maintained. Just a few miles away from Kozhikode city, with such a perfect blend of all things. There are a number of good eateries offering snacks, Ice cream, Faluda with a sprinkling of restaurants specialising in Malabari, chinese, North and South Indian delicacies, and the walk in the beach in the morning and evening which makes your day perfect and complete.", 
        "https://www.google.com/maps/dir/National+Institute+of+Technology,+Calicut,+Calicut+Mukkam+Road,+Kattangal,+Kerala/Kozhikode+Beach,+Kozhikode,+Kerala/@11.2879737,75.8156937,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3ba642fd50000001:0xbe8a77db953bda6c!2m2!1d75.9336359!2d11.3215791!1m5!1m1!1s0x3ba6592f11eb8511:0xf103dcf3408d910e!2m2!1d75.7673095!2d11.2626228"
    ],
    ["./images/finalized/kozhippara.jpg", 
        "KOZHIPPARA WATERFALLS",
        "Easily accessible by roads, Kozhippara Falls are situated on the borders of Kakkadampoyil on the Malappuram -Calicut District divide. Providing a stunning sight, these falls are best known for its friendliness to swimmers and trekkers.",
        "https://www.google.com/maps/dir/National+Institute+of+Technology,+Calicut,+Calicut+Mukkam+Road,+Kattangal,+Kerala/Kozhippara+Waterfalls,+Kozhippara+Road,+Kerala/@11.3184864,75.9523382,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3ba642fd50000001:0xbe8a77db953bda6c!2m2!1d75.9336359!2d11.3215791!1m5!1m1!1s0x3ba63fa2c2870ed1:0xe7ebfac0eed98ae3!2m2!1d76.1077333!2d11.35383"
    ],
    ["./images/finalized/mananchira.jpg", 
        "MANANCHIRA SQUARE", 
        "This is the famous place known to everyone in Calicut . It is one of the landmark in Calicut. It is not very big nor too small . This place looks good especially in the evening and morning. Though this place is situated inside the city we don't get to feel the traffic noise that much. It's a calm and quiet place. There is a man made water reservoir, which is a beautiful one to see and it supplies water to most of the restaurant and other places in Calicut town. This place is easy to reach , some of the other famous places like the meetai theruvu, the Calicut beach, The paragon restaurant , etc..are also near by this place.This is definitely a must place to visit in Calicut...", 
        "https://www.google.com/maps/dir/National+Institute+of+Technology,+Calicut,+Calicut+Mukkam+Road,+Kattangal,+Kerala/MANANCHIRA+SQUARE,+Mananchira,+Kozhikode,+Kerala/@11.2876015,75.820924,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3ba642fd50000001:0xbe8a77db953bda6c!2m2!1d75.9336359!2d11.3215791!1m5!1m1!1s0x3ba659a799de4c57:0x364431f5ae04da8c!2m2!1d75.7819443!2d11.2535203"
    ],
    ["./images/finalized/sargolaya.jpg",
        "SARGAALAYA", 
        "Located near the beautiful backwaters of Iringal near Vadakara in Kozhikode district of Kerala, Sargaalaya Kerala Arts and Crafts village is a wonderful initiative by the Department of Tourism, Kerala.", 
        "https://www.google.com/maps/dir/National+Institute+of+Technology,+Calicut,+Calicut+Mukkam+Road,+Kattangal,+Kerala/Sargaalaya+Kerala+Arts+%26+Crafts+Village,+Sargalaya+Road,+Kottakkal,+Iringal,+Kerala/@11.4236277,75.6313373,11z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3ba642fd50000001:0xbe8a77db953bda6c!2m2!1d75.9336359!2d11.3215791!1m5!1m1!1s0x3ba685cf70c82cb7:0x76c5a055c26b73eb!2m2!1d75.6058617!2d11.5601151"
    ],
    ["./images/finalized/smstreet.jpg", 
        "SM STREET", 
        "A trip to Kozhikode is never complete without shopping @ the SM street! Some of the old shops have been replaced with modern exteriors and interiors but the spirit of the place is still there; you will never regret visiting this awesome spot!", 
        "https://www.google.com/maps/dir/National+Institute+of+Technology,+Calicut,+Calicut+Mukkam+Road,+Kattangal,+Kerala/SM+Street,+Palayam,+Kozhikode,+Kerala/@11.2852492,75.820924,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3ba642fd50000001:0xbe8a77db953bda6c!2m2!1d75.9336359!2d11.3215791!1m5!1m1!1s0x3ba6593f100fb8a7:0x3faf33837725dced!2m2!1d75.7815607!2d11.2507622"
    ],
    ["./images/finalized/vayalada.jpg", 
        "VAYALADA", 
        "View point vayalada”One of the latest added tourist attractions in calicut.. One of the best visiting place and naturally fulfill happiness with that place make we happy. Dam view point is the main attraction in this place.", 
        "https://www.google.com/maps/dir/National+Institute+of+Technology,+Calicut,+Calicut+Mukkam+Road,+Kattangal,+Kerala/Vayalada+View+Point,+Mullanpara+Rd,+vayalada,+Balussery,+Kerala/@11.4192805,75.8378126,12z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3ba642fd50000001:0xbe8a77db953bda6c!2m2!1d75.9336359!2d11.3215791!1m5!1m1!1s0x3ba665197fdb11c3:0xd78dd552bf781776!2m2!1d75.8587355!2d11.5175211"
    ]
]; // image, place, info


let hotels = new Array(10);

hotels = [
    ["Fezinn Hotel", 
        "./images/Fezinn_Hotel.jpeg", 
        "3240 per night", 
        "9.1", 
        "https://www.booking.com/hotel/in/fezinn.html?label=in-calcutta-yxqXemYfnlPL3_wKH8JIlAS392710300035%3Apl%3Ata%3Ap1270%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-3166582807%3Alp1007778%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c&sid=46836acebf2768db982b33e2c99f9d21&aid=306395&ucfs=1&arphpl=1&checkin=2023-02-04&checkout=2023-02-05&dest_id=-2101691&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=10&hapos=10&sr_order=popularity&srpvid=e7ba5cd46af5018c&srepoch=1675516330&all_sr_blocks=721944301_333312833_2_42_0&highlighted_blocks=721944301_333312833_2_42_0&matching_block_id=721944301_333312833_2_42_0&sr_pri_blocks=721944301_333312833_2_42_0__324000&from_beach_sr=1&from_sustainable_property_sr=1&from=searchresults&map_fdco=1#hotelTmpl", 
        "https://www.booking.com/hotel/in/fezinn.html?label=in-calcutta-yxqXemYfnlPL3_wKH8JIlAS392710300035%3Apl%3Ata%3Ap1270%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-3166582807%3Alp1007778%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c&sid=46836acebf2768db982b33e2c99f9d21&aid=306395&ucfs=1&arphpl=1&checkin=2023-02-04&checkout=2023-02-05&dest_id=-2101691&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=10&hapos=10&sr_order=popularity&srpvid=e7ba5cd46af5018c&srepoch=1675516330&all_sr_blocks=721944301_333312833_2_42_0&highlighted_blocks=721944301_333312833_2_42_0&matching_block_id=721944301_333312833_2_42_0&sr_pri_blocks=721944301_333312833_2_42_0__324000&from_beach_sr=1&from_sustainable_property_sr=1&from=searchresults&map_fdco=1#hotelTmpl", 
        "https://www.booking.com/hotel/in/fezinn.html?label=in-calcutta-yxqXemYfnlPL3_wKH8JIlAS392710300035%3Apl%3Ata%3Ap1270%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-3166582807%3Alp1007778%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c&sid=46836acebf2768db982b33e2c99f9d21&aid=306395&ucfs=1&arphpl=1&checkin=2023-02-04&checkout=2023-02-05&dest_id=-2101691&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=10&hapos=10&sr_order=popularity&srpvid=e7ba5cd46af5018c&srepoch=1675516330&all_sr_blocks=721944301_333312833_2_42_0&highlighted_blocks=721944301_333312833_2_42_0&matching_block_id=721944301_333312833_2_42_0&sr_pri_blocks=721944301_333312833_2_42_0__324000&from_beach_sr=1&from_sustainable_property_sr=1&from=searchresults&map_fdco=1&map=1"
    ],
    ["KPM Tripenta Hotel", 
        "./images/Tripenta.jpeg", 
        "4999 per night", 
        "8.2", 
        "https://www.booking.com/hotel/in/kpm-tripenta.html?label=in-calcutta-yxqXemYfnlPL3_wKH8JIlAS392710300035%3Apl%3Ata%3Ap1270%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-3166582807%3Alp1007778%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c&sid=46836acebf2768db982b33e2c99f9d21&aid=306395&ucfs=1&arphpl=1&checkin=2023-02-04&checkout=2023-02-05&dest_id=-2101691&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=2&hapos=2&sr_order=popularity&nflt=review_score%3D80&srpvid=e7ba5cd46af5018c&srepoch=1675516565&all_sr_blocks=516969604_365698106_2_1_0&highlighted_blocks=516969604_365698106_2_1_0&matching_block_id=516969604_365698106_2_1_0&sr_pri_blocks=516969604_365698106_2_1_0__499900&from_beach_sr=1&from_sustainable_property_sr=1&from=searchresults&map_fdco=1#hotelTmpl", 
        "https://www.booking.com/hotel/in/kpm-tripenta.html?label=in-calcutta-yxqXemYfnlPL3_wKH8JIlAS392710300035%3Apl%3Ata%3Ap1270%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-3166582807%3Alp1007778%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c&sid=46836acebf2768db982b33e2c99f9d21&aid=306395&ucfs=1&arphpl=1&checkin=2023-02-04&checkout=2023-02-05&dest_id=-2101691&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=2&hapos=2&sr_order=popularity&nflt=review_score%3D80&srpvid=e7ba5cd46af5018c&srepoch=1675516565&all_sr_blocks=516969604_365698106_2_1_0&highlighted_blocks=516969604_365698106_2_1_0&matching_block_id=516969604_365698106_2_1_0&sr_pri_blocks=516969604_365698106_2_1_0__499900&from_beach_sr=1&from_sustainable_property_sr=1&from=searchresults&map_fdco=1#hotelTmpl", 
        "https://www.booking.com/hotel/in/kpm-tripenta.html?label=in-calcutta-yxqXemYfnlPL3_wKH8JIlAS392710300035%3Apl%3Ata%3Ap1270%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-3166582807%3Alp1007778%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c&sid=46836acebf2768db982b33e2c99f9d21&aid=306395&ucfs=1&arphpl=1&checkin=2023-02-04&checkout=2023-02-05&dest_id=-2101691&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=2&hapos=2&sr_order=popularity&nflt=review_score%3D80&srpvid=e7ba5cd46af5018c&srepoch=1675516565&all_sr_blocks=516969604_365698106_2_1_0&highlighted_blocks=516969604_365698106_2_1_0&matching_block_id=516969604_365698106_2_1_0&sr_pri_blocks=516969604_365698106_2_1_0__499900&from_beach_sr=1&from_sustainable_property_sr=1&from=searchresults&map_fdco=1&map=1"
    ],
    ["Apollo Dimora Calicut", 
        "./images/Apollo_Dimora.jpeg", 
        "5000 per night", 
        "8.6", 
        "https://www.booking.com/hotel/in/apollo-dimora-calicut.html?label=in-calcutta-yxqXemYfnlPL3_wKH8JIlAS392710300035%3Apl%3Ata%3Ap1270%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-3166582807%3Alp1007778%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c&sid=46836acebf2768db982b33e2c99f9d21&aid=306395&ucfs=1&arphpl=1&checkin=2023-02-04&checkout=2023-02-05&dest_id=-2101691&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=3&hapos=3&sr_order=popularity&nflt=review_score%3D80&srpvid=e7ba5cd46af5018c&srepoch=1675516565&all_sr_blocks=780083802_341538666_2_1_0&highlighted_blocks=780083802_341538666_2_1_0&matching_block_id=780083802_341538666_2_1_0&sr_pri_blocks=780083802_341538666_2_1_0__500000&from_beach_sr=1&from=searchresults&map_fdco=1#hotelTmpl", 
        "https://www.booking.com/hotel/in/apollo-dimora-calicut.html?label=in-calcutta-yxqXemYfnlPL3_wKH8JIlAS392710300035%3Apl%3Ata%3Ap1270%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-3166582807%3Alp1007778%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c&sid=46836acebf2768db982b33e2c99f9d21&aid=306395&ucfs=1&arphpl=1&checkin=2023-02-04&checkout=2023-02-05&dest_id=-2101691&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=3&hapos=3&sr_order=popularity&nflt=review_score%3D80&srpvid=e7ba5cd46af5018c&srepoch=1675516565&all_sr_blocks=780083802_341538666_2_1_0&highlighted_blocks=780083802_341538666_2_1_0&matching_block_id=780083802_341538666_2_1_0&sr_pri_blocks=780083802_341538666_2_1_0__500000&from_beach_sr=1&from=searchresults&map_fdco=1#hotelTmpl", 
        "https://www.booking.com/hotel/in/apollo-dimora-calicut.html?label=in-calcutta-yxqXemYfnlPL3_wKH8JIlAS392710300035%3Apl%3Ata%3Ap1270%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-3166582807%3Alp1007778%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c&sid=46836acebf2768db982b33e2c99f9d21&aid=306395&ucfs=1&arphpl=1&checkin=2023-02-04&checkout=2023-02-05&dest_id=-2101691&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=3&hapos=3&sr_order=popularity&nflt=review_score%3D80&srpvid=e7ba5cd46af5018c&srepoch=1675516565&all_sr_blocks=780083802_341538666_2_1_0&highlighted_blocks=780083802_341538666_2_1_0&matching_block_id=780083802_341538666_2_1_0&sr_pri_blocks=780083802_341538666_2_1_0__500000&from_beach_sr=1&from=searchresults&map_fdco=1&map=1"
    ],
    ["Nexstay Treats Inn", 
        "./images/Nexstay.jpeg", 
        "1499 per night", 
        "7.1", 
        "https://www.booking.com/hotel/in/nexstay-treats-inn.html?label=in-calcutta-yxqXemYfnlPL3_wKH8JIlAS392710300035%3Apl%3Ata%3Ap1270%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-3166582807%3Alp1007778%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c&sid=46836acebf2768db982b33e2c99f9d21&aid=306395&ucfs=1&arphpl=1&checkin=2023-02-04&checkout=2023-02-05&dest_id=-2101691&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=3&hapos=3&sr_order=popularity&nflt=review_score%3D80%3Breview_score%3D70&srpvid=e7ba5cd46af5018c&srepoch=1675516796&all_sr_blocks=703551801_325387593_2_0_0&highlighted_blocks=703551801_325387593_2_0_0&matching_block_id=703551801_325387593_2_0_0&sr_pri_blocks=703551801_325387593_2_0_0__149900&from_beach_sr=1&from_sustainable_property_sr=1&from=searchresults&map_fdco=1#hotelTmpl", 
        "https://www.booking.com/hotel/in/nexstay-treats-inn.html?label=in-calcutta-yxqXemYfnlPL3_wKH8JIlAS392710300035%3Apl%3Ata%3Ap1270%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-3166582807%3Alp1007778%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c&sid=46836acebf2768db982b33e2c99f9d21&aid=306395&ucfs=1&arphpl=1&checkin=2023-02-04&checkout=2023-02-05&dest_id=-2101691&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=3&hapos=3&sr_order=popularity&nflt=review_score%3D80%3Breview_score%3D70&srpvid=e7ba5cd46af5018c&srepoch=1675516796&all_sr_blocks=703551801_325387593_2_0_0&highlighted_blocks=703551801_325387593_2_0_0&matching_block_id=703551801_325387593_2_0_0&sr_pri_blocks=703551801_325387593_2_0_0__149900&from_beach_sr=1&from_sustainable_property_sr=1&from=searchresults&map_fdco=1&map=1", 
        "https://www.booking.com/hotel/in/nexstay-treats-inn.html?label=in-calcutta-yxqXemYfnlPL3_wKH8JIlAS392710300035%3Apl%3Ata%3Ap1270%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-3166582807%3Alp1007778%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c&sid=46836acebf2768db982b33e2c99f9d21&aid=306395&ucfs=1&arphpl=1&checkin=2023-02-04&checkout=2023-02-05&dest_id=-2101691&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=3&hapos=3&sr_order=popularity&nflt=review_score%3D80%3Breview_score%3D70&srpvid=e7ba5cd46af5018c&srepoch=1675516796&all_sr_blocks=703551801_325387593_2_0_0&highlighted_blocks=703551801_325387593_2_0_0&matching_block_id=703551801_325387593_2_0_0&sr_pri_blocks=703551801_325387593_2_0_0__149900&from_beach_sr=1&from_sustainable_property_sr=1&from=searchresults&map_fdco=1&map=1"
    ],
    ["La Mer Inn", 
        "./images/La_Mer_Inn.jpeg", 
        "1260 per night", 
        "7.1", 
        "https://www.booking.com/hotel/in/kadavu-resorts.html?label=in-calcutta-yxqXemYfnlPL3_wKH8JIlAS392710300035%3Apl%3Ata%3Ap1270%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-3166582807%3Alp1007778%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c&sid=46836acebf2768db982b33e2c99f9d21&aid=306395&ucfs=1&arphpl=1&checkin=2023-02-04&checkout=2023-02-05&dest_id=-2101691&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=5&hapos=5&sr_order=popularity&nflt=review_score%3D80%3Breview_score%3D70&srpvid=e7ba5cd46af5018c&srepoch=1675516796&all_sr_blocks=36278805_295728233_2_42_0&highlighted_blocks=36278805_295728233_2_42_0&matching_block_id=36278805_295728233_2_42_0&sr_pri_blocks=36278805_295728233_2_42_0__555500&from_beach_sr=1&from_sustainable_property_sr=1&from=searchresults&map_fdco=1#hotelTmpl", 
        "https://www.booking.com/hotel/in/la-mer-inn.html?label=in-calcutta-yxqXemYfnlPL3_wKH8JIlAS392710300035%3Apl%3Ata%3Ap1270%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-3166582807%3Alp1007778%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c&sid=46836acebf2768db982b33e2c99f9d21&aid=306395&ucfs=1&arphpl=1&checkin=2023-02-04&checkout=2023-02-05&dest_id=-2101691&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=4&hapos=4&sr_order=popularity&nflt=review_score%3D80%3Breview_score%3D70&srpvid=e7ba5cd46af5018c&srepoch=1675516796&all_sr_blocks=656524001_295609864_2_1_0&highlighted_blocks=656524001_295609864_2_1_0&matching_block_id=656524001_295609864_2_1_0&sr_pri_blocks=656524001_295609864_2_1_0__126000&from_beach_sr=1&from_sustainable_property_sr=1&from=searchresults&map_fdco=1#hotelTmpl", 
        "https://www.booking.com/hotel/in/la-mer-inn.html?label=in-calcutta-yxqXemYfnlPL3_wKH8JIlAS392710300035%3Apl%3Ata%3Ap1270%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-3166582807%3Alp1007778%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c&sid=46836acebf2768db982b33e2c99f9d21&aid=306395&ucfs=1&arphpl=1&checkin=2023-02-04&checkout=2023-02-05&dest_id=-2101691&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=4&hapos=4&sr_order=popularity&nflt=review_score%3D80%3Breview_score%3D70&srpvid=e7ba5cd46af5018c&srepoch=1675516796&all_sr_blocks=656524001_295609864_2_1_0&highlighted_blocks=656524001_295609864_2_1_0&matching_block_id=656524001_295609864_2_1_0&sr_pri_blocks=656524001_295609864_2_1_0__126000&from_beach_sr=1&from_sustainable_property_sr=1&from=searchresults&map_fdco=1&map=1"
    ],
    ["The Raviz Calicut", 
        "./images/Raviz.jpeg", 
        "5555 per night", 
        "7.7", 
        "https://www.booking.com/hotel/in/the-raviz-calicut.html?label=in-calcutta-yxqXemYfnlPL3_wKH8JIlAS392710300035%3Apl%3Ata%3Ap1270%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-3166582807%3Alp1007778%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c&sid=46836acebf2768db982b33e2c99f9d21&aid=306395&ucfs=1&arphpl=1&checkin=2023-02-04&checkout=2023-02-05&dest_id=-2101691&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=6&hapos=6&sr_order=popularity&nflt=review_score%3D80%3Breview_score%3D70&srpvid=e7ba5cd46af5018c&srepoch=1675516796&all_sr_blocks=167106002_298360119_2_0_0&highlighted_blocks=167106002_298360119_2_0_0&matching_block_id=167106002_298360119_2_0_0&sr_pri_blocks=167106002_298360119_2_0_0__555500&from_beach_sr=1&from_sustainable_property_sr=1&from=searchresults&map_fdco=1#hotelTmpl", 
        "https://www.booking.com/hotel/in/the-raviz-calicut.html?label=in-calcutta-yxqXemYfnlPL3_wKH8JIlAS392710300035%3Apl%3Ata%3Ap1270%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-3166582807%3Alp1007778%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c&sid=46836acebf2768db982b33e2c99f9d21&aid=306395&ucfs=1&arphpl=1&checkin=2023-02-04&checkout=2023-02-05&dest_id=-2101691&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=6&hapos=6&sr_order=popularity&nflt=review_score%3D80%3Breview_score%3D70&srpvid=e7ba5cd46af5018c&srepoch=1675516796&all_sr_blocks=167106002_298360119_2_0_0&highlighted_blocks=167106002_298360119_2_0_0&matching_block_id=167106002_298360119_2_0_0&sr_pri_blocks=167106002_298360119_2_0_0__555500&from_beach_sr=1&from_sustainable_property_sr=1&from=searchresults&map_fdco=1#hotelTmpl", 
        "https://www.booking.com/hotel/in/the-raviz-calicut.html?label=in-calcutta-yxqXemYfnlPL3_wKH8JIlAS392710300035%3Apl%3Ata%3Ap1270%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-3166582807%3Alp1007778%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c&sid=46836acebf2768db982b33e2c99f9d21&aid=306395&ucfs=1&arphpl=1&checkin=2023-02-04&checkout=2023-02-05&dest_id=-2101691&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=6&hapos=6&sr_order=popularity&nflt=review_score%3D80%3Breview_score%3D70&srpvid=e7ba5cd46af5018c&srepoch=1675516796&all_sr_blocks=167106002_298360119_2_0_0&highlighted_blocks=167106002_298360119_2_0_0&matching_block_id=167106002_298360119_2_0_0&sr_pri_blocks=167106002_298360119_2_0_0__555500&from_beach_sr=1&from_sustainable_property_sr=1&from=searchresults&map_fdco=1&map=1"
    ],
    ["Kings Calicut", 
        "./images/Kings_calicut.jpeg", 
        "1199 per night", 
        "7.1", 
        "https://www.booking.com/hotel/in/kings-calicut-kozhikode.html?label=in-calcutta-yxqXemYfnlPL3_wKH8JIlAS392710300035%3Apl%3Ata%3Ap1270%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-3166582807%3Alp1007778%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c&sid=46836acebf2768db982b33e2c99f9d21&aid=306395&ucfs=1&arphpl=1&checkin=2023-02-04&checkout=2023-02-05&dest_id=-2101691&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=2&hapos=2&sr_order=price&nflt=review_score%3D80%3Breview_score%3D70&srpvid=e7ba5cd46af5018c&srepoch=1675517176&all_sr_blocks=844482903_366934355_0_0_0&highlighted_blocks=844482903_366934355_0_0_0&matching_block_id=844482903_366934355_0_0_0&sr_pri_blocks=844482903_366934355_0_0_0__119900&from_beach_sr=1&from=searchresults&map_fdco=1#hotelTmpl", 
        "https://www.booking.com/hotel/in/kings-calicut-kozhikode.html?label=in-calcutta-yxqXemYfnlPL3_wKH8JIlAS392710300035%3Apl%3Ata%3Ap1270%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-3166582807%3Alp1007778%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c&sid=46836acebf2768db982b33e2c99f9d21&aid=306395&ucfs=1&arphpl=1&checkin=2023-02-04&checkout=2023-02-05&dest_id=-2101691&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=2&hapos=2&sr_order=price&nflt=review_score%3D80%3Breview_score%3D70&srpvid=e7ba5cd46af5018c&srepoch=1675517176&all_sr_blocks=844482903_366934355_0_0_0&highlighted_blocks=844482903_366934355_0_0_0&matching_block_id=844482903_366934355_0_0_0&sr_pri_blocks=844482903_366934355_0_0_0__119900&from_beach_sr=1&from=searchresults&map_fdco=1#hotelTmpl", 
        "https://www.booking.com/hotel/in/kings-calicut-kozhikode.html?label=in-calcutta-yxqXemYfnlPL3_wKH8JIlAS392710300035%3Apl%3Ata%3Ap1270%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-3166582807%3Alp1007778%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c&sid=46836acebf2768db982b33e2c99f9d21&aid=306395&ucfs=1&arphpl=1&checkin=2023-02-04&checkout=2023-02-05&dest_id=-2101691&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=2&hapos=2&sr_order=price&nflt=review_score%3D80%3Breview_score%3D70&srpvid=e7ba5cd46af5018c&srepoch=1675517176&all_sr_blocks=844482903_366934355_0_0_0&highlighted_blocks=844482903_366934355_0_0_0&matching_block_id=844482903_366934355_0_0_0&sr_pri_blocks=844482903_366934355_0_0_0__119900&from_beach_sr=1&from=searchresults&map_fdco=1&map=1"
    ],
    ["Treebo Trend Casino", 
        "./images/Treebo.jpeg", 
        "2877 per night", 
        "7.6", 
        "https://www.booking.com/hotel/in/treebo-trend-casino.html?label=in-calcutta-yxqXemYfnlPL3_wKH8JIlAS392710300035%3Apl%3Ata%3Ap1270%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-3166582807%3Alp1007778%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c&sid=46836acebf2768db982b33e2c99f9d21&aid=306395&ucfs=1&arphpl=1&checkin=2023-02-04&checkout=2023-02-05&dest_id=-2101691&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=5&hapos=5&sr_order=bayesian_review_score&nflt=review_score%3D80%3Breview_score%3D70&srpvid=e7ba5cd46af5018c&srepoch=1675517290&all_sr_blocks=495791401_363457395_2_1_0&highlighted_blocks=495791401_363457395_2_1_0&matching_block_id=495791401_363457395_2_1_0&sr_pri_blocks=495791401_363457395_2_1_0__287662&from_beach_sr=1&from=searchresults&map_fdco=1#hotelTmpl", 
        "https://www.booking.com/hotel/in/treebo-trend-casino.html?label=in-calcutta-yxqXemYfnlPL3_wKH8JIlAS392710300035%3Apl%3Ata%3Ap1270%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-3166582807%3Alp1007778%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c&sid=46836acebf2768db982b33e2c99f9d21&aid=306395&ucfs=1&arphpl=1&checkin=2023-02-04&checkout=2023-02-05&dest_id=-2101691&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=5&hapos=5&sr_order=bayesian_review_score&nflt=review_score%3D80%3Breview_score%3D70&srpvid=e7ba5cd46af5018c&srepoch=1675517290&all_sr_blocks=495791401_363457395_2_1_0&highlighted_blocks=495791401_363457395_2_1_0&matching_block_id=495791401_363457395_2_1_0&sr_pri_blocks=495791401_363457395_2_1_0__287662&from_beach_sr=1&from=searchresults&map_fdco=1#hotelTmpl", 
        "https://www.booking.com/hotel/in/treebo-trend-casino.html?label=in-calcutta-yxqXemYfnlPL3_wKH8JIlAS392710300035%3Apl%3Ata%3Ap1270%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-3166582807%3Alp1007778%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c&sid=46836acebf2768db982b33e2c99f9d21&aid=306395&ucfs=1&arphpl=1&checkin=2023-02-04&checkout=2023-02-05&dest_id=-2101691&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=5&hapos=5&sr_order=bayesian_review_score&nflt=review_score%3D80%3Breview_score%3D70&srpvid=e7ba5cd46af5018c&srepoch=1675517290&all_sr_blocks=495791401_363457395_2_1_0&highlighted_blocks=495791401_363457395_2_1_0&matching_block_id=495791401_363457395_2_1_0&sr_pri_blocks=495791401_363457395_2_1_0__287662&from_beach_sr=1&from=searchresults&map_fdco=1&map=1"
    ],
    ["White Suite Hotel", 
        "./images/White_suite.jpeg", 
        "3500 per night", 
        "8.0", 
        "https://www.booking.com/hotel/in/white-suite.html?label=in-calcutta-yxqXemYfnlPL3_wKH8JIlAS392710300035%3Apl%3Ata%3Ap1270%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-3166582807%3Alp1007778%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c&sid=46836acebf2768db982b33e2c99f9d21&aid=306395&ucfs=1&arphpl=1&checkin=2023-02-04&checkout=2023-02-05&dest_id=-2101691&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=6&hapos=6&sr_order=bayesian_review_score&nflt=review_score%3D80%3Breview_score%3D70&srpvid=e7ba5cd46af5018c&srepoch=1675517290&all_sr_blocks=699276703_288290037_2_0_0&highlighted_blocks=699276703_288290037_2_0_0&matching_block_id=699276703_288290037_2_0_0&sr_pri_blocks=699276703_288290037_2_0_0__350000&from_beach_sr=1&from=searchresults&map_fdco=1#hotelTmpl", 
        "https://www.booking.com/hotel/in/white-suite.html?label=in-calcutta-yxqXemYfnlPL3_wKH8JIlAS392710300035%3Apl%3Ata%3Ap1270%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-3166582807%3Alp1007778%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c&sid=46836acebf2768db982b33e2c99f9d21&aid=306395&ucfs=1&arphpl=1&checkin=2023-02-04&checkout=2023-02-05&dest_id=-2101691&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=6&hapos=6&sr_order=bayesian_review_score&nflt=review_score%3D80%3Breview_score%3D70&srpvid=e7ba5cd46af5018c&srepoch=1675517290&all_sr_blocks=699276703_288290037_2_0_0&highlighted_blocks=699276703_288290037_2_0_0&matching_block_id=699276703_288290037_2_0_0&sr_pri_blocks=699276703_288290037_2_0_0__350000&from_beach_sr=1&from=searchresults&map_fdco=1#hotelTmpl", 
        "https://www.booking.com/hotel/in/white-suite.html?label=in-calcutta-yxqXemYfnlPL3_wKH8JIlAS392710300035%3Apl%3Ata%3Ap1270%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-3166582807%3Alp1007778%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c&sid=46836acebf2768db982b33e2c99f9d21&aid=306395&ucfs=1&arphpl=1&checkin=2023-02-04&checkout=2023-02-05&dest_id=-2101691&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=6&hapos=6&sr_order=bayesian_review_score&nflt=review_score%3D80%3Breview_score%3D70&srpvid=e7ba5cd46af5018c&srepoch=1675517290&all_sr_blocks=699276703_288290037_2_0_0&highlighted_blocks=699276703_288290037_2_0_0&matching_block_id=699276703_288290037_2_0_0&sr_pri_blocks=699276703_288290037_2_0_0__350000&from_beach_sr=1&from=searchresults&map_fdco=1&map=1"
    ],
    ["Grand Plaza Suites", 
        "./images/Grand_Plaza.jpeg", 
        "2775 per night", 
        "7.8", 
        "https://www.booking.com/hotel/in/grand-plaza-suites-kozhikode.html?label=in-calcutta-yxqXemYfnlPL3_wKH8JIlAS392710300035%3Apl%3Ata%3Ap1270%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-3166582807%3Alp1007778%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c&sid=46836acebf2768db982b33e2c99f9d21&aid=306395&ucfs=1&arphpl=1&checkin=2023-02-04&checkout=2023-02-05&dest_id=-2101691&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=9&hapos=9&sr_order=bayesian_review_score&nflt=review_score%3D80%3Breview_score%3D70&srpvid=e7ba5cd46af5018c&srepoch=1675517290&all_sr_blocks=359016601_266268656_2_2_0&highlighted_blocks=359016601_266268656_2_2_0&matching_block_id=359016601_266268656_2_2_0&sr_pri_blocks=359016601_266268656_2_2_0__277500&from_beach_sr=1&from_sustainable_property_sr=1&from=searchresults&map_fdco=1#hotelTmpl", 
        "https://www.booking.com/hotel/in/grand-plaza-suites-kozhikode.html?label=in-calcutta-yxqXemYfnlPL3_wKH8JIlAS392710300035%3Apl%3Ata%3Ap1270%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-3166582807%3Alp1007778%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c&sid=46836acebf2768db982b33e2c99f9d21&aid=306395&ucfs=1&arphpl=1&checkin=2023-02-04&checkout=2023-02-05&dest_id=-2101691&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=9&hapos=9&sr_order=bayesian_review_score&nflt=review_score%3D80%3Breview_score%3D70&srpvid=e7ba5cd46af5018c&srepoch=1675517290&all_sr_blocks=359016601_266268656_2_2_0&highlighted_blocks=359016601_266268656_2_2_0&matching_block_id=359016601_266268656_2_2_0&sr_pri_blocks=359016601_266268656_2_2_0__277500&from_beach_sr=1&from_sustainable_property_sr=1&from=searchresults&map_fdco=1#hotelTmpl", 
        "https://www.booking.com/hotel/in/grand-plaza-suites-kozhikode.html?label=in-calcutta-yxqXemYfnlPL3_wKH8JIlAS392710300035%3Apl%3Ata%3Ap1270%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-3166582807%3Alp1007778%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c&sid=46836acebf2768db982b33e2c99f9d21&aid=306395&ucfs=1&arphpl=1&checkin=2023-02-04&checkout=2023-02-05&dest_id=-2101691&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=9&hapos=9&sr_order=bayesian_review_score&nflt=review_score%3D80%3Breview_score%3D70&srpvid=e7ba5cd46af5018c&srepoch=1675517290&all_sr_blocks=359016601_266268656_2_2_0&highlighted_blocks=359016601_266268656_2_2_0&matching_block_id=359016601_266268656_2_2_0&sr_pri_blocks=359016601_266268656_2_2_0__277500&from_beach_sr=1&from_sustainable_property_sr=1&from=searchresults&map_fdco=1&map=1"
    ]
]; //name img price rating reviews booking location




function update() {
    var random_nums = new Array(4);
    for (let i = 0; i < 4; i) {
        let temp = Math.floor(Math.random()*12);
        if (random_nums.includes(temp) == false)
            random_nums[i++] = temp;
    } // potential infinite loop but whatever


    document.querySelector("#first_image").src = locations[random_nums[0]][0];
    document.querySelector("#second_image").src = locations[random_nums[1]][0];
    document.querySelector("#third_image").src = locations[random_nums[2]][0];
    document.querySelector("#fourth_image").src = locations[random_nums[3]][0];

    document.querySelector("#first_place").innerHTML = locations[random_nums[0]][1];
    document.querySelector("#second_place").innerHTML = locations[random_nums[1]][1];
    document.querySelector("#third_place").innerHTML = locations[random_nums[2]][1];
    document.querySelector("#fourth_place").innerHTML = locations[random_nums[3]][1];

    document.querySelector("#first").innerHTML = locations[random_nums[0]][2];
    document.querySelector("#second").innerHTML = locations[random_nums[1]][2];
    document.querySelector("#third").innerHTML = locations[random_nums[2]][2];
    document.querySelector("#fourth").innerHTML = locations[random_nums[3]][2];

    document.querySelector("#link1").href = locations[random_nums[0]][3];
    document.querySelector("#link2").href = locations[random_nums[1]][3];
    document.querySelector("#link3").href = locations[random_nums[2]][3];
    document.querySelector("#link4").href = locations[random_nums[3]][3];

}

update();




function johann() {
    var random_nums = new Array(3);
    let rating = "rating: ";
    let price = "₹"

    for (let i = 0; i < 3; i) {
        let temp = Math.floor(Math.random()*10);
        if (random_nums.includes(temp) == false)
            random_nums[i++] = temp;
    } // potential infinite loop but whatever

    document.querySelector("#hotel1").innerHTML = hotels[random_nums[0]][0];
    document.querySelector("#hotel2").innerHTML = hotels[random_nums[1]][0];
    document.querySelector("#hotel3").innerHTML = hotels[random_nums[2]][0];

    document.querySelector("#image1").src = hotels[random_nums[0]][1];
    document.querySelector("#image2").src = hotels[random_nums[1]][1];
    document.querySelector("#image3").src = hotels[random_nums[2]][1];

    document.querySelector("#price1").innerHTML = price.concat(hotels[random_nums[0]][2]);
    document.querySelector("#price2").innerHTML = price.concat(hotels[random_nums[1]][2]);
    document.querySelector("#price3").innerHTML = price.concat(hotels[random_nums[2]][2]);

    document.querySelector("#rating1").innerHTML = rating.concat(hotels[random_nums[0]][3]);
    document.querySelector("#rating2").innerHTML = rating.concat(hotels[random_nums[1]][3]);
    document.querySelector("#rating3").innerHTML = rating.concat(hotels[random_nums[2]][3]);

    document.querySelector("#reviews1").href = hotels[random_nums[0]][4];
    document.querySelector("#reviews2").href = hotels[random_nums[1]][4];
    document.querySelector("#reviews3").href = hotels[random_nums[2]][4];

    
    document.querySelector("#location1").href = hotels[random_nums[0]][6];
    document.querySelector("#location2").href = hotels[random_nums[1]][6];
    document.querySelector("#location3").href = hotels[random_nums[2]][6];

    document.querySelector("#booking1").href = hotels[random_nums[0]][5];
    document.querySelector("#booking2").href = hotels[random_nums[1]][5];
    document.querySelector("#booking3").href = hotels[random_nums[2]][5];
}

johann();

//document.getElementsByClassName("refresh").onclick = myfunction;
document.querySelector(".refresh").addEventListener("click", update);


