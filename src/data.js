/* ====== CÂU HỎI THEO CHỦ ĐỀ VÀ 3 MỨC ĐỘ: DỄ, TRUNG BÌNH, KHÓ ====== */
export const LEVELS = [
  { id: "easy", name: "Dễ", em: "🟢", c: "#2ee59d", desc: "Kiến thức cơ bản, dễ nhận biết" },
  { id: "medium", name: "Trung bình", em: "🟡", c: "#ffd23f", desc: "Thử thách kiến thức phổ thông" },
  { id: "hard", name: "Khó", em: "🔴", c: "#ff5c7a", desc: "Dành cho chuyên gia địa lý" }
];

export const CATS = [
  {
    id: "vnland",
    name: "Địa lý lãnh thổ Việt Nam",
    em: "🗺️",
    c: "#2ee59d",
    desc: "Núi, sông, đảo, vịnh… thử sức theo 3 cấp độ!",
    levels: {
      easy: [
        ["Đỉnh núi cao nhất Việt Nam là?", "Fansipan", "Ngọc Linh", "Bạch Mã", "Tam Đảo", "Fansipan cao 3.143 m, được gọi là “nóc nhà Đông Dương”."],
        ["Sông nào bồi đắp nên Đồng bằng sông Cửu Long?", "Mê Kông", "Sông Hồng", "Đồng Nai", "Thu Bồn", "Mê Kông bắt nguồn từ cao nguyên Tây Tạng, chảy qua 6 quốc gia."],
        ["Hòn đảo lớn nhất Việt Nam là?", "Phú Quốc", "Cát Bà", "Côn Đảo", "Lý Sơn", "Phú Quốc rộng khoảng 574 km²."],
        ["Vịnh Hạ Long thuộc tỉnh nào?", "Quảng Ninh", "Hải Phòng", "Thanh Hóa", "Nghệ An", "Vịnh có gần 2.000 hòn đảo đá vôi lớn nhỏ."],
        ["Thành phố nào là thủ đô của Việt Nam?", "Hà Nội", "Sài Gòn", "Đà Nẵng", "Cần Thơ", "Hà Nội là thủ đô ngàn năm văn hiến."],
        ["Mũi Cà Mau là điểm cực nào của Việt Nam?", "Cực Nam trên đất liền", "Cực Bắc", "Cực Đông", "Cực Tây", "Đất Mũi vẫn đang lấn ra biển mỗi năm nhờ phù sa."],
        ["Quần đảo Trường Sa và Hoàng Sa thuộc quốc gia nào?", "Việt Nam", "Trung Quốc", "Philippines", "Malaysia", "Cả hai quần đảo đều thuộc chủ quyền thiêng liêng của Việt Nam."]
      ],
      medium: [
        ["Hang động lớn nhất thế giới ở Quảng Bình là?", "Sơn Đoòng", "Phong Nha", "Thiên Đường", "Tú Làn", "Sơn Đoòng đủ rộng để chứa cả một khu phố với nhà cao tầng!"],
        ["Đường bờ biển Việt Nam dài khoảng bao nhiêu?", "3.260 km", "1.500 km", "2.200 km", "4.500 km", "Biển nước ta trải dài từ Móng Cái đến Hà Tiên."],
        ["Đèo nào nổi tiếng nối Thừa Thiên Huế và Đà Nẵng?", "Đèo Hải Vân", "Đèo Mã Pí Lèng", "Đèo Khau Phạ", "Đèo Ô Quy Hồ", "Đèo Hải Vân từng được mệnh danh là Thiên hạ đệ nhất hùng quan."],
        ["Dãy núi nào là ranh giới tự nhiên giữa miền Bắc và miền Trung?", "Dãy Hoành Sơn", "Dãy Trường Sơn", "Dãy Hoàng Liên Sơn", "Dãy Đông Triều", "Dãy Hoành Sơn đâm thẳng ra biển ở đèo Ngang."],
        ["Hồ nước ngọt tự nhiên lớn nhất Việt Nam là?", "Hồ Ba Bể", "Hồ Dầu Tiếng", "Hồ Trị An", "Hồ Thác Bà", "Hồ Ba Bể nằm ở tỉnh Bắc Kạn."],
        ["Tỉnh nào duy nhất ở Việt Nam có 3 mặt giáp biển?", "Cà Mau", "Kiên Giang", "Bà Rịa - Vũng Tàu", "Bình Thuận", "Cà Mau nằm ở tận cùng phía Nam với bờ biển dài 254 km."]
      ],
      hard: [
        ["Điểm cực Tây trên đất liền của Việt Nam thuộc tỉnh nào?", "Điện Biên", "Lai Châu", "Sơn La", "Lào Cai", "Cực Tây tại A Pa Chải, xã Sín Thâu, huyện Mường Nhé, Điện Biên."],
        ["Điểm cực Đông trên đất liền Việt Nam thuộc tỉnh nào?", "Khánh Hòa", "Bình Thuận", "Phú Yên", "Ninh Thuận", "Mũi Đôi thuộc bán đảo Hòn Gốm, xã Vạn Thạnh, huyện Vạn Ninh, Khánh Hòa."],
        ["Đỉnh núi cao thứ hai Việt Nam (sau Fansipan) là?", "Pu Si Lung", "Pusilung", "Ngọc Linh", "Tây Côn Lĩnh", "Pu Si Lung cao 3.076 m nằm ở Lai Châu."],
        ["Vườn quốc gia nào là Khu dự trữ sinh quyển thế giới đầu tiên của Việt Nam?", "Cần Giờ", "Cúc Phương", "Phong Nha - Kẻ Bàng", "Cát Tiên", "Rừng ngập mặn Cần Giờ được UNESCO công nhận năm 2000."],
        ["Tỉnh nào có nhiều thành phố trực thuộc nhất Việt Nam?", "Quảng Ninh", "Bình Dương", "Thanh Hóa", "Đồng Nai", "Quảng Ninh có 5 thành phố: Hạ Long, Móng Cái, Uông Bí, Cẩm Phả, Đông Triều."],
        ["Sông dài nhất chảy hoàn toàn trong lãnh thổ Việt Nam là?", "Sông Đồng Nai", "Sông Mã", "Sông Cả", "Sông Hương", "Sông Đồng Nai dài khoảng 586 km."]
      ]
    }
  },
  {
    id: "wland",
    name: "Địa lý lãnh thổ thế giới",
    em: "🌏",
    c: "#4cc9f0",
    desc: "Từ đại dương đến sa mạc, vòng quanh thế giới.",
    levels: {
      easy: [
        ["Con sông dài nhất thế giới là?", "Sông Nile", "Amazon", "Mississippi", "Dương Tử", "Nile dài khoảng 6.650 km, chảy qua 11 quốc gia."],
        ["Sa mạc nóng lớn nhất thế giới là?", "Sahara", "Gobi", "Kalahari", "Ả Rập", "Sahara rộng gần bằng cả nước Mỹ."],
        ["Quốc gia có diện tích lớn nhất thế giới?", "Nga", "Canada", "Trung Quốc", "Mỹ", "Nga trải dài qua 11 múi giờ."],
        ["Đỉnh Everest nằm trên biên giới của hai nước nào?", "Nepal và Trung Quốc", "Ấn Độ và Nepal", "Pakistan và Trung Quốc", "Bhutan và Ấn Độ", "Everest cao 8.849 m."],
        ["Đại dương lớn nhất thế giới?", "Thái Bình Dương", "Đại Tây Dương", "Ấn Độ Dương", "Bắc Băng Dương", "Chiếm khoảng 1/3 bề mặt Trái Đất."],
        ["Quốc gia nhỏ nhất thế giới là?", "Vatican", "Monaco", "San Marino", "Nauru", "Vatican chỉ rộng khoảng 0,44 km²."]
      ],
      medium: [
        ["Hồ nước ngọt sâu nhất thế giới?", "Baikal", "Victoria", "Superior", "Titicaca", "Hồ Baikal sâu hơn 1.600 m ở Siberia."],
        ["Kênh đào nổi tiếng nối Địa Trung Hải và Biển Đỏ là?", "Kênh đào Suez", "Kênh đào Panama", "Kênh đào Kiel", "Kênh đào Corinth", "Suez giúp rút ngắn tuyến đường biển giữa châu Âu và châu Á."],
        ["Hòn đảo lớn nhất thế giới (không tính châu lục) là?", "Greenland", "Madagascar", "Borneo", "Sumatra", "Greenland thuộc chủ quyền của Đan Mạch."],
        ["Dãy núi dài nhất thế giới trên đất liền là?", "Andes", "Himalaya", "Rocky", "Alps", "Dãy Andes trải dài hơn 7.000 km dọc Nam Mỹ."],
        ["Bán đảo lớn nhất thế giới là?", "Bán đảo Ả Rập", "Bán đảo Indochina", "Bán đảo Scandinavian", "Bán đảo Deccan", "Bán đảo Ả Rập rộng khoảng 3,2 triệu km²."]
      ],
      hard: [
        ["Thác nước tự nhiên cao nhất thế giới là?", "Thác Angel", "Thác Niagara", "Thác Victoria", "Thác Iguazu", "Thác Angel ở Venezuela cao 979 m."],
        ["Nơi thấp nhất trên bề mặt lục địa Trái Đất là?", "Biển Chết", "Thung lũng Cái Chết", "Hồ Assal", "Biển Caspi", "Bờ Biển Chết thấp hơn mực nước biển khoảng 430 m."],
        ["Quốc gia không giáp biển có diện tích lớn nhất thế giới?", "Kazakhstan", "Mông Cổ", "Chad", "Bolivia", "Kazakhstan rộng tới 2,72 triệu km²."],
        ["Đỉnh núi cao nhất châu Mỹ là?", "Aconcagua", "Denali", "Kilimanjaro", "Elbrus", "Aconcagua thuộc dãy Andes (Argentina) cao 6.961 m."],
        ["Vực thẫm đại dương sâu nhất thế giới là?", "Rãnh Mariana", "Rãnh Puerto Rico", "Rãnh Java", "Rãnh Philippine", "Rãnh Mariana ở Thái Bình Dương sâu gần 11.000 m."]
      ]
    }
  },
  {
    id: "wculture",
    name: "Địa lý văn hóa thế giới",
    em: "🎭",
    c: "#f72585",
    desc: "Lễ hội, trang phục, điệu nhảy khắp năm châu.",
    levels: {
      easy: [
        ["Lễ hội bia Oktoberfest nổi tiếng ở nước nào?", "Đức", "Áo", "Bỉ", "Séc", "Lễ hội diễn ra tại thành phố Munich."],
        ["Lễ hội Holi – ném bột màu – của nước nào?", "Ấn Độ", "Thái Lan", "Nepal", "Indonesia", "Holi mừng mùa xuân và chiến thắng của cái thiện."],
        ["Kimono là trang phục truyền thống của?", "Nhật Bản", "Hàn Quốc", "Trung Quốc", "Việt Nam", "Từ “kimono” nghĩa đen là “thứ để mặc”."],
        ["Lễ hội Carnival rực rỡ ở Rio de Janeiro thuộc nước nào?", "Brazil", "Argentina", "Mexico", "Colombia", "Đây là lễ hội hóa trang lớn nhất thế giới."],
        ["Lễ hội ném cà chua La Tomatina diễn ra ở?", "Tây Ban Nha", "Ý", "Bồ Đào Nha", "Pháp", "Hàng chục tấn cà chua được dùng trong một giờ!"]
      ],
      medium: [
        ["Điệu nhảy chiến binh Haka gắn với dân tộc nào?", "Māori (New Zealand)", "Aboriginal (Úc)", "Hawaii", "Samoa", "Đội tuyển rugby All Blacks biểu diễn Haka trước trận đấu."],
        ["Hanbok là trang phục truyền thống của nước nào?", "Hàn Quốc", "Nhật Bản", "Trung Quốc", "Mongolia", "Hanbok có màu sắc tươi tắn và đường nét mềm mại."],
        ["Lễ hội đèn trời Loy Krathong diễn ra ở nước nào?", "Thái Lan", "Lào", "Campuchia", "Myanmar", "Người dân thả hoa đăng lên sông và đèn trời lên không trung."],
        ["Điệu nhảy Samba quyến rũ xuất xứ từ quốc gia nào?", "Brazil", "Tây Ban Nha", "Cuba", "Argentina", "Samba biểu tượng cho tinh thần cuồng nhiệt của Brazil."]
      ],
      hard: [
        ["Điệu nhảy Flamenco sôi động bắt nguồn từ vùng nào của Tây Ban Nha?", "Andalusia", "Catalonia", "Madrid", "Basque", "Flamenco kết hợp giữa hát, đàn guitar và điệu múa."],
        ["Lễ hội Ngày của người chết (Día de los Muertos) nổi tiếng nhất ở?", "Mexico", "Tây Ban Nha", "Peru", "Chile", "Lễ hội tưởng nhớ người quá cố với mặt nạ trang điểm hình đầu lâu."],
        ["Trang phục truyền thống Sari quyến rũ thuộc văn hóa nào?", "Ấn Độ", "Nhật Bản", "Ả Rập", "Ai Cập", "Sari là tấm vải dài quấn quanh cơ thể người phụ nữ."],
        ["Điệu múa Tango lãng mạn có nguồn gốc từ vùng biên giới giữa hai nước nào?", "Argentina và Uruguay", "Brazil và Argentina", "Chile và Peru", "Colombia và Venezuela", "Tango xuất thân từ các khu cảng ven sông Rió de la Plata."]
      ]
    }
  },
  {
    id: "vnculture",
    name: "Địa lý văn hóa Việt Nam",
    em: "🏮",
    c: "#ffd23f",
    desc: "Di sản, lễ hội, nét đẹp của ba miền.",
    levels: {
      easy: [
        ["Nhã nhạc cung đình gắn với cố đô nào?", "Huế", "Hoa Lư", "Thăng Long", "Cổ Loa", "Nhã nhạc được UNESCO ghi danh năm 2003."],
        ["Dân ca Quan họ là đặc trưng của vùng nào?", "Bắc Ninh", "Nghệ An", "Huế", "Cần Thơ", "Quan họ là di sản văn hóa phi vật thể của nhân loại."],
        ["Đờn ca tài tử là loại hình nghệ thuật của?", "Nam Bộ", "Bắc Bộ", "Tây Nguyên", "Duyên hải miền Trung", "Được UNESCO ghi danh năm 2013."],
        ["Chợ nổi Cái Răng nổi tiếng ở đâu?", "Đồng bằng sông Cửu Long", "Đồng bằng sông Hồng", "Duyên hải miền Trung", "Tây Nguyên", "Người bán “bẹo” hàng bằng cây sào trên ghe."],
        ["Tết Trung thu diễn ra vào ngày nào âm lịch?", "15 tháng 8", "15 tháng 1", "5 tháng 5", "1 tháng 10", "Đêm rằm tháng Tám trăng tròn nhất năm."]
      ],
      medium: [
        ["Không gian văn hóa Cồng chiêng thuộc vùng nào?", "Tây Nguyên", "Tây Bắc", "Đồng bằng sông Hồng", "Đông Nam Bộ", "Cồng chiêng gắn với đời sống của nhiều dân tộc Tây Nguyên."],
        ["Lễ hội Giỗ Tổ Hùng Vương được tổ chức ở tỉnh nào?", "Phú Thọ", "Bắc Ninh", "Hà Nội", "Ninh Bình", "Lễ hội diễn ra vào mùng 10 tháng 3 âm lịch tại Đền Hùng."],
        ["Làng nghề làm gốm sứ Bát Tràng nổi tiếng thuộc tỉnh/thành nào?", "Hà Nội", "Bắc Ninh", "Hải Dương", "Vĩnh Phúc", "Làng gốm có lịch sử hơn 500 năm bên sông Hồng."],
        ["Cố đô Hoa Lư thuộc tỉnh nào?", "Ninh Bình", "Thanh Hóa", "Thừa Thiên Huế", "Quảng Bình", "Hoa Lư là kinh đô đầu tiên của nhà nước phong kiến tập quyền Việt Nam."]
      ],
      hard: [
        ["Hát Xoan là loại hình dân ca lễ nghi gắn liền với tỉnh nào?", "Phú Thọ", "Vĩnh Phúc", "Bắc Giang", "Thái Nguyên", "Hát Xoan gắn liền với tín ngưỡng thờ cúng Hùng Vương."],
        ["Loại hình Hát Then truyền thống thuộc về cộng đồng dân tộc nào?", "Tày, Nùng, Thái", "H'Mông, Dao", "Mường, Ba Na", "Chăm, Khmer", "Hát Then là di sản văn hóa phi vật thể đại diện của nhân loại."],
        ["Nghệ thuật Xòe Thái vừa được UNESCO vinh danh thuộc vùng nào?", "Tây Bắc", "Đông Bắc", "Tây Nguyên", "Đồng bằng Nam Bộ", "Xòe Thái biểu trưng cho sự đoàn kết của người Thái."]
      ]
    }
  },
  {
    id: "vnfood",
    name: "Ẩm thực Việt Nam",
    em: "🍜",
    c: "#ff8c42",
    desc: "Món ngon nhớ quê hương – đoán xem của vùng nào!",
    levels: {
      easy: [
        ["Bún bò nổi tiếng nhất ở thành phố nào?", "Huế", "Hà Nội", "Đà Nẵng", "Nha Trang", "Bún bò Huế có vị cay đậm và sả thơm."],
        ["Phở có nguồn gốc từ vùng nào?", "Hà Nội – Nam Định", "Huế", "Sài Gòn", "Cần Thơ", "Phở xuất hiện ở miền Bắc đầu thế kỷ 20."],
        ["Cao lầu là đặc sản của?", "Hội An", "Huế", "Hà Nội", "Cà Mau", "Sợi cao lầu truyền thống dùng nước giếng Bá Lễ."],
        ["Cơm tấm là món gắn liền với?", "Sài Gòn", "Hà Nội", "Huế", "Hải Phòng", "Cơm tấm xưa làm từ gạo vỡ."],
        ["Bánh tráng nướng “pizza Việt Nam” nổi tiếng ở?", "Đà Lạt", "Hà Nội", "Cần Thơ", "Quy Nhơn", "Món ăn vặt hợp trời se lạnh của phố núi."]
      ],
      medium: [
        ["Chả cá Lã Vọng là đặc sản của?", "Hà Nội", "Hải Phòng", "Huế", "Đà Nẵng", "Món ăn có thì là và hành, ăn với bún và mắm tôm."],
        ["Mì Quảng là món ăn mang hương vị đặc trưng của tỉnh nào?", "Quảng Nam", "Quảng Ngãi", "Quảng Bình", "Quảng Trị", "Mì Quảng ăn kèm bánh tráng nướng và lạc rang."],
        ["Nem chua nổi tiếng nhất ở tỉnh nào miền Trung?", "Thanh Hóa", "Nghệ An", "Hà Tĩnh", "Quảng Bình", "Nem chua Thanh Hóa có vị chua dịu, cay thơm tỏi ớt."],
        ["Bánh xèo giòn rụm kích thước lớn là đặc sản vùng nào?", "Miền Tây Nam Bộ", "Miền Bắc", "Tây Nguyên", "Tây Bắc", "Bánh xèo miền Tây ăn kèm rất nhiều loại rau rừng."]
      ],
      hard: [
        ["Món “Bún quậy” độc đáo nổi tiếng ở địa danh nào?", "Phú Quốc", "Côn Đảo", "Lý Sơn", "Cát Bà", "Thực khách tự tay quậy nước chấm gồm muối, đường, ớt, tắc."],
        ["Món “Bún suông” có tạo hình giòn dai đặc sản của tỉnh nào?", "Trà Vinh", "Sóc Trăng", "Bạc Liêu", "Cà Mau", "Chả tôm trong bún suông được nặn hình con suông (sâu đuông)."],
        ["Thắng cố là món ăn truyền thống độc đáo của các dân tộc vùng nào?", "Tây Bắc", "Tây Nguyên", "Đồng bằng sông Cửu Long", "Duyên hải Nam Trung Bộ", "Thắng cố truyền thống được nấu từ nội tạng ngựa."]
      ]
    }
  },
  {
    id: "wfood",
    name: "Ẩm thực thế giới",
    em: "🍣",
    c: "#b5179e",
    desc: "Đi khắp thế giới bằng… bao tử.",
    levels: {
      easy: [
        ["Sushi là món ăn truyền thống của nước nào?", "Nhật Bản", "Hàn Quốc", "Trung Quốc", "Thái Lan", "Sushi ban đầu là cách bảo quản cá bằng cơm lên men."],
        ["Pizza hiện đại có nguồn gốc từ thành phố nào?", "Napoli (Ý)", "Paris (Pháp)", "Madrid (Tây Ban Nha)", "Athens (Hy Lạp)", "Pizza Margherita mang màu cờ Ý."],
        ["Kim chi là món ăn quốc hồn của?", "Hàn Quốc", "Nhật Bản", "Trung Quốc", "Mông Cổ", "Hàn Quốc có hàng trăm loại kim chi."],
        ["Tacos là món ăn đặc trưng của?", "Mexico", "Tây Ban Nha", "Peru", "Cuba", "Tacos có thể kẹp đủ loại nhân từ thịt đến rau."],
        ["Tom Yum là món canh chua cay của?", "Thái Lan", "Malaysia", "Lào", "Campuchia", "Món có sả, lá chanh và riềng."]
      ],
      medium: [
        ["Paella – cơm hải sản chảo lớn – đến từ?", "Tây Ban Nha", "Ý", "Bồ Đào Nha", "Hy Lạp", "Paella có gốc từ vùng Valencia."],
        ["Poutine – khoai chiên phủ phô mai và nước sốt – của?", "Canada", "Mỹ", "Anh", "Úc", "Poutine ra đời ở vùng Québec."],
        ["Dimsum là nét tinh túy ẩm thực của quốc gia nào?", "Trung Quốc", "Nhật Bản", "Hàn Quốc", "Việt Nam", "Dimsum bao gồm các món hấp trong lồng tre nhỏ."],
        ["Bánh sừng bò (Croissant) nổi tiếng gắn liền với nước nào?", "Pháp", "Ý", "Đức", "Tây Ban Nha", "Chiếc bánh có hình trăng khuyết giòn xốp."]
      ],
      hard: [
        ["Món Rendang – thịt kho nước cốt dừa sệt cay – nổi tiếng của nước nào?", "Indonesia", "Malaysia", "Thái Lan", "Philippines", "Rendang từng được bình chọn là món ăn ngon nhất thế giới."],
        ["Món Fondue (lẩu phô mai nóng chảy) là đặc sản của?", "Thụy Sĩ", "Pháp", "Áo", "Bỉ", "Thực khách nhúng khối xiên bánh mì vào nồi phô mai nóng."],
        ["Món Kebab cuộn thịt nướng thơm lừng xuất xứ từ?", "Thổ Nhĩ Kỳ", "Hy Lạp", "Ai Cập", "Iran", "Döner Kebab rất phổ biến trên toàn thế giới."]
      ]
    }
  },
  {
    id: "flags",
    name: "Đoán cờ các nước",
    em: "🚩",
    c: "#ef233c",
    flags: 1,
    desc: "Nhìn cờ, đoán nước – chọn cấp độ thử sức!",
    levels: {
      easy: [
        ["vn", "Việt Nam", "Quốc kỳ đỏ sao vàng năm cánh."],
        ["jp", "Nhật Bản", "Cờ Nhật có tên là Nisshōki – “cờ mặt trời”."],
        ["v|#0055a4,#fff,#ef4135", "Pháp", "Cờ tam sắc xanh–trắng–đỏ."],
        ["h|#000,#dd0000,#ffce00", "Đức", "Màu đen–đỏ–vàng xuất hiện từ phong trào thống nhất."],
        ["h|#ce1126,#fff", "Indonesia", "Cờ Indonesia gồm hai màu đỏ và trắng."]
      ],
      medium: [
        ["v|#009246,#fff,#ce2b37", "Ý", "Cờ Ý có màu xanh lá, trắng và đỏ."],
        ["h|#a51931*1,#fff*1,#2d2a4a*2,#fff*1,#a51931*1", "Thái Lan", "Cờ năm dải ngang ba màu."],
        ["h|#fff,#dc143c", "Ba Lan", "Hai màu trắng–đỏ truyền thống."],
        ["h|#ae1c28,#fff,#21468b", "Hà Lan", "Cờ ba sắc đỏ–trắng–xanh dương."],
        ["v|#169b62,#fff,#ff883e", "Ireland", "Ba dải đứng xanh lá–trắng–cam."]
      ],
      hard: [
        ["h|#fff,#0039a6,#d52b1e", "Nga", "Cờ ba sắc trắng–xanh–đỏ."],
        ["h|#0057b7,#ffd700", "Ukraine", "Xanh bầu trời và vàng đồng lúa mì."],
        ["v|#000,#fdda24,#ef3340", "Bỉ", "Cờ Bỉ lấy màu từ huy hiệu của công quốc Brabant."],
        ["h|#ed2939,#fff,#ed2939", "Áo", "Cờ Áo ba dải ngang đỏ–trắng–đỏ."]
      ]
    }
  }
];

export const FL = [
  ["vn", "Việt Nam", "Quốc kỳ đỏ sao vàng năm cánh."],
  ["jp", "Nhật Bản", "Cờ Nhật có tên là Nisshōki – “cờ mặt trời”."],
  ["v|#0055a4,#fff,#ef4135", "Pháp", "Cờ tam sắc xanh–trắng–đỏ."],
  ["v|#009246,#fff,#ce2b37", "Ý", "Cờ Ý giống cờ Ireland nhưng đổi chỗ xanh lá và cam/đỏ."],
  ["h|#000,#dd0000,#ffce00", "Đức", "Màu đen–đỏ–vàng xuất hiện từ phong trào thống nhất nước Đức."],
  ["h|#a51931*1,#fff*1,#2d2a4a*2,#fff*1,#a51931*1", "Thái Lan", "Gọi là cờ “Trairong” – cờ ba màu."],
  ["h|#ce1126,#fff", "Indonesia", "Cờ Indonesia gần như giống cờ Monaco!"],
  ["h|#fff,#dc143c", "Ba Lan", "Hai màu trắng–đỏ là màu quốc huy Ba Lan."],
  ["h|#ae1c28,#fff,#21468b", "Hà Lan", "Một trong những cờ ba sắc cổ nhất thế giới."],
  ["v|#169b62,#fff,#ff883e", "Ireland", "Màu xanh lá đại diện người Công giáo, màu cam đại diện người Tin lành."],
  ["h|#fff,#0039a6,#d52b1e", "Nga", "Cờ Nga được dùng từ thế kỷ 17 và khôi phục năm 1991."],
  ["h|#0057b7,#ffd700", "Ukraine", "Xanh tượng trưng bầu trời, vàng là đồng lúa mì."],
  ["v|#000,#fdda24,#ef3340", "Bỉ", "Cờ Bỉ lấy màu từ huy hiệu của công quốc Brabant."],
  ["h|#ed2939,#fff,#ed2939", "Áo", "Cờ Áo thuộc loại cờ cổ nhất châu Âu."]
];
