/* ====== CÂU HỎI THEO CHỦ ĐỀ VÀ 3 MỨC ĐỘ: DỄ, TRUNG BÌNH, KHÓ (MỖI MỨC ĐỘ 12 CÂU) ====== */
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
        ["Quần đảo Trường Sa và Hoàng Sa thuộc quốc gia nào?", "Việt Nam", "Trung Quốc", "Philippines", "Malaysia", "Cả hai quần đảo đều thuộc chủ quyền thiêng liêng của Việt Nam."],
        ["Sông nào chảy qua lòng thủ đô Hà Nội?", "Sông Hồng", "Sông Tiền", "Sông Hương", "Sông Cả", "Sông Hồng là dòng sông lớn nhất miền Bắc Việt Nam."],
        ["Phong Nha - Kẻ Bàng thuộc tỉnh nào của Việt Nam?", "Quảng Bình", "Quảng Trị", "Hà Tĩnh", "Thừa Thiên Huế", "Được UNESCO hai lần vinh danh là Di sản thiên nhiên thế giới."],
        ["Thành phố lớn nhất khu vực Tây Nguyên là?", "Buôn Ma Thuột", "Đà Lạt", "Pleiku", "Kon Tum", "Buôn Ma Thuột được mệnh danh là thủ phủ cà phê của Việt Nam."],
        ["Quần đảo Cô Tô xinh đẹp thuộc tỉnh nào?", "Quảng Ninh", "Hải Phòng", "Nam Định", "Thái Bình", "Cô Tô là quần đảo gồm hơn 50 đảo lớn nhỏ ở Quảng Ninh."],
        ["Tỉnh nào nổi tiếng với khu du lịch Hồ Núi Cốc?", "Thái Nguyên", "Bắc Giang", "Phú Thọ", "Tuyên Quang", "Hồ Núi Cốc gắn liền với huyền thoại Chàng Cốc Nàng Công."]
      ],
      medium: [
        ["Hang động lớn nhất thế giới ở Quảng Bình là?", "Sơn Đoòng", "Phong Nha", "Thiên Đường", "Tú Làn", "Sơn Đoòng đủ rộng để chứa cả một khu phố với nhà cao tầng!"],
        ["Đường bờ biển Việt Nam dài khoảng bao nhiêu?", "3.260 km", "1.500 km", "2.200 km", "4.500 km", "Biển nước ta trải dài từ Móng Cái đến Hà Tiên."],
        ["Đèo nào nổi tiếng nối Thừa Thiên Huế và Đà Nẵng?", "Đèo Hải Vân", "Đèo Mã Pí Lèng", "Đèo Khau Phạ", "Đèo Ô Quy Hồ", "Đèo Hải Vân từng được mệnh danh là Thiên hạ đệ nhất hùng quan."],
        ["Dãy núi nào là ranh giới tự nhiên giữa miền Bắc và miền Trung?", "Dãy Hoành Sơn", "Dãy Trường Sơn", "Dãy Hoàng Liên Sơn", "Dãy Đông Triều", "Dãy Hoành Sơn đâm thẳng ra biển ở đèo Ngang."],
        ["Hồ nước ngọt tự nhiên lớn nhất Việt Nam là?", "Hồ Ba Bể", "Hồ Dầu Tiếng", "Hồ Trị An", "Hồ Thác Bà", "Hồ Ba Bể nằm ở tỉnh Bắc Kạn."],
        ["Tỉnh nào duy nhất ở Việt Nam có 3 mặt giáp biển?", "Cà Mau", "Kiên Giang", "Bà Rịa - Vũng Tàu", "Bình Thuận", "Cà Mau nằm ở tận cùng phía Nam với bờ biển dài 254 km."],
        ["Vườn quốc gia nổi tiếng với loài chim Sếu đầu đỏ ở Đồng Tháp là?", "Tràm Chim", "U Minh Hạ", "Cát Tiên", "Bàu Sấu", "Vườn quốc gia Tràm Chim là khu Ramsar công nhận quốc tế."],
        ["Đèo nào được mệnh danh là một trong tứ đại đỉnh đèo ở Tây Bắc dài hơn 50km?", "Đèo Ô Quy Hồ", "Đèo Pha Đin", "Đèo Mã Pí Lèng", "Đèo Khau Phạ", "Đèo Ô Quy Hồ nối liền hai tỉnh Lào Cai và Lai Châu."],
        ["Cao nguyên đá duy nhất của Việt Nam được UNESCO công nhận Công viên địa chất toàn cầu?", "Cao nguyên đá Đồng Văn", "Cao nguyên Mộc Châu", "Cao nguyên Di Linh", "Cao nguyên Lâm Viên", "Thuộc tỉnh Hà Giang ở cực Bắc Tổ quốc."],
        ["Đảo nào là đảo núi lửa nổi tiếng ở Quảng Ngãi?", "Lý Sơn", "Phú Quý", "Cát Bà", "Hòn Tre", "Lý Sơn được mệnh danh là vương quốc tỏi."],
        ["Thác Đray Nur hùng vĩ nổi tiếng thuộc tỉnh nào?", "Đắc Lắk", "Đắk Nông", "Gia Lai", "Lâm Đồng", "Thác nằm trên dòng sông Sêrêpôk huyền thoại."],
        ["Cụm đảo Cù Lao Chàm nổi tiếng thuộc tỉnh nào?", "Quảng Nam", "Quảng Ngãi", "Bình Định", "Khánh Hòa", "Cù Lao Chàm là Khu dự trữ sinh quyển thế giới."]
      ],
      hard: [
        ["Điểm cực Tây trên đất liền của Việt Nam thuộc tỉnh nào?", "Điện Biên", "Lai Châu", "Sơn La", "Lào Cai", "Cực Tây tại A Pa Chải, xã Sín Thâu, huyện Mường Nhé, Điện Biên."],
        ["Điểm cực Đông trên đất liền Việt Nam thuộc tỉnh nào?", "Khánh Hòa", "Bình Thuận", "Phú Yên", "Ninh Thuận", "Mũi Đôi thuộc bán đảo Hòn Gốm, xã Vạn Thạnh, huyện Vạn Ninh, Khánh Hòa."],
        ["Đỉnh núi cao thứ hai Việt Nam (sau Fansipan) là?", "Pu Si Lung", "Pusilung", "Ngọc Linh", "Tây Côn Lĩnh", "Pu Si Lung cao 3.076 m nằm ở Lai Châu."],
        ["Vườn quốc gia nào là Khu dự trữ sinh quyển thế giới đầu tiên của Việt Nam?", "Cần Giờ", "Cúc Phương", "Phong Nha - Kẻ Bàng", "Cát Tiên", "Rừng ngập mặn Cần Giờ được UNESCO công nhận năm 2000."],
        ["Tỉnh nào có nhiều thành phố trực thuộc nhất Việt Nam?", "Quảng Ninh", "Bình Dương", "Thanh Hóa", "Đồng Nai", "Quảng Ninh có 5 thành phố: Hạ Long, Móng Cái, Uông Bí, Cẩm Phả, Đông Triều."],
        ["Sông dài nhất chảy hoàn toàn trong lãnh thổ Việt Nam là?", "Sông Đồng Nai", "Sông Mã", "Sông Cả", "Sông Hương", "Sông Đồng Nai dài khoảng 586 km."],
        ["Huyện đảo duy nhất trực thuộc thành phố Đà Nẵng là?", "Hoàng Sa", "Trường Sa", "Lý Sơn", "Bạch Long Vĩ", "Huyện đảo Hoàng Sa thành lập năm 1997 thuộc Đà Nẵng."],
        ["Thác nước tự nhiên lớn nhất Việt Nam nằm ở biên giới Việt - Trung là?", "Thác Bản Giốc", "Thác Đray Nur", "Thác K50", "Thác Cam Ly", "Thác Bản Giốc thuộc tỉnh Cao Bằng."],
        ["Điểm cực Bắc trên đất liền Việt Nam thuộc xã nào của tỉnh Hà Giang?", "Lũng Cú", "Sín Thâu", "Vạn Thạnh", "Đất Mũi", "Cột cờ Lũng Cú nằm ở đỉnh núi Lũng Cú, huyện Đồng Văn, tỉnh Hà Giang."],
        ["Vịnh biển nào ở Việt Nam gia nhập Câu lạc bộ các vịnh đẹp nhất thế giới?", "Vịnh Nha Trang", "Vịnh Xuân Đài", "Vịnh Vĩnh Hy", "Vịnh Dung Quất", "Vịnh Nha Trang thuộc tỉnh Khánh Hòa."],
        ["Ngọn núi lửa Chư Đăng Ya độc đáo nổi tiếng nằm ở tỉnh nào?", "Gia Lai", "Đắk Lắk", "Kon Tum", "Lâm Đồng", "Chư Đăng Ya nổi tiếng với mùa hoa dại quỳ nở vàng rực."],
        ["Danh thắng Suối Tiên với dòng suối đỏ cam kỳ lạ ở đâu?", "Phan Thiết (Bình Thuận)", "Nha Trang", "Ninh Thuận", "Vũng Tàu", "Suối Tiên chảy qua đồi cát đỏ nhấp nhô tuyệt đẹp."]
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
        ["Quốc gia nhỏ nhất thế giới là?", "Vatican", "Monaco", "San Marino", "Nauru", "Vatican chỉ rộng khoảng 0,44 km²."],
        ["Châu lục nào đông dân nhất thế giới?", "Châu Á", "Châu Âu", "Châu Phi", "Châu Mỹ", "Châu Á chiếm hơn 60% dân số thế giới."],
        ["Đất nước được mệnh danh là Đất nước mặt trời mọc?", "Nhật Bản", "Hàn Quốc", "Trung Quốc", "Thái Lan", "Nhật Bản nằm ở phía đông châu Á."],
        ["Quốc gia duy nhất vừa là một quốc gia vừa là một châu lục?", "Úc", "New Zealand", "Nam Phi", "Madagascar", "Úc là quốc gia duy nhất chiếm trọn một châu lục."],
        ["Quốc gia hình chiếc ủng nổi tiếng ở châu Âu là?", "Ý", "Tây Ban Nha", "Hy Lạp", "Bồ Đào Nha", "Lãnh thổ Ý trên bản đồ có hình chiếc ủng đặc trưng."],
        ["Đỉnh núi cao nhất châu Phi là?", "Kilimanjaro", "Kenya", "Stanley", "Meru", "Kilimanjaro cao 5.895 m ở Tanzania."],
        ["Sông Mê Kông đổ nước ra biển nào?", "Biển Đông", "Biển Hoa Đông", "Biển Andaman", "Biển Nhật Bản", "Mê Kông đổ ra Biển Đông qua 9 cửa sông."]
      ],
      medium: [
        ["Hồ nước ngọt sâu nhất thế giới?", "Baikal", "Victoria", "Superior", "Titicaca", "Hồ Baikal sâu hơn 1.600 m ở Siberia."],
        ["Kênh đào nổi tiếng nối Địa Trung Hải và Biển Đỏ là?", "Kênh đào Suez", "Kênh đào Panama", "Kênh đào Kiel", "Kênh đào Corinth", "Suez giúp rút ngắn tuyến đường biển giữa châu Âu và châu Á."],
        ["Hòn đảo lớn nhất thế giới (không tính châu lục) là?", "Greenland", "Madagascar", "Borneo", "Sumatra", "Greenland thuộc chủ quyền của Đan Mạch."],
        ["Dãy núi dài nhất thế giới trên đất liền là?", "Andes", "Himalaya", "Rocky", "Alps", "Dãy Andes trải dài hơn 7.000 km dọc Nam Mỹ."],
        ["Bán đảo lớn nhất thế giới là?", "Bán đảo Ả Rập", "Bán đảo Indochina", "Bán đảo Scandinavian", "Bán đảo Deccan", "Bán đảo Ả Rập rộng khoảng 3,2 triệu km²."],
        ["Quốc gia có nhiều múi giờ nhất thế giới (tính cả lãnh thổ hải ngoại)?", "Pháp", "Nga", "Mỹ", "Anh", "Pháp sở hữu 12 múi giờ nhờ nhiều vùng lãnh thổ hải ngoại."],
        ["Con sông có lưu lượng nước lớn nhất thế giới là?", "Sông Amazon", "Sông Nile", "Sông Congo", "Sông Mê Kông", "Amazon chiếm khoảng 20% tổng lưu lượng nước sông toàn cầu."],
        ["Sa mạc khô hạn nhất thế giới trên Trái Đất là?", "Sa mạc Atacama", "Sa mạc Sahara", "Sa mạc Gobi", "Sa mạc Mojave", "Atacama ở Chile có nơi chưa từng ghi nhận hạt mưa nào."],
        ["Biển cạn bị thu hẹp diện tích nghiêm trọng ở Trung Á là?", "Biển Aral", "Biển Caspi", "Biển Đen", "Biển Đỏ", "Biển Aral từng là hồ lớn thứ 4 thế giới."],
        ["Quốc gia duy nhất trên thế giới nằm ở cả 4 bán cầu?", "Kiribati", "Ecuador", "Indonesia", "Brazil", "Kiribati bao gồm các đảo nằm rải rác trên Thái Bình Dương."],
        ["Hồ chứa nước ngọt khổng lồ Superior thuộc đại lục nào?", "Bắc Mỹ", "Nam Mỹ", "Châu Âu", "Châu Úc", "Superior là hồ rộng nhất trong Ngũ Đại Hồ."],
        ["Đất nước nào có tên gọi nghĩa là “Đất nước Triệu Voi”?", "Lào", "Thái Lan", "Campuchia", "Myanmar", "Lào được gọi là vương quốc Lan Xang (Triệu Voi)."]
      ],
      hard: [
        ["Thác nước tự nhiên cao nhất thế giới là?", "Thác Angel", "Thác Niagara", "Thác Victoria", "Thác Iguazu", "Thác Angel ở Venezuela cao 979 m."],
        ["Nơi thấp nhất trên bề mặt lục địa Trái Đất là?", "Biển Chết", "Thung lũng Cái Chết", "Hồ Assal", "Biển Caspi", "Bờ Biển Chết thấp hơn mực nước biển khoảng 430 m."],
        ["Quốc gia không giáp biển có diện tích lớn nhất thế giới?", "Kazakhstan", "Mông Cổ", "Chad", "Bolivia", "Kazakhstan rộng tới 2,72 triệu km²."],
        ["Đỉnh núi cao nhất châu Mỹ là?", "Aconcagua", "Denali", "Kilimanjaro", "Elbrus", "Aconcagua thuộc dãy Andes (Argentina) cao 6.961 m."],
        ["Vực thẫm đại dương sâu nhất thế giới là?", "Rãnh Mariana", "Rãnh Puerto Rico", "Rãnh Java", "Rãnh Philippine", "Rãnh Mariana ở Thái Bình Dương sâu gần 11.000 m."],
        ["Thành phố duy nhất nằm ở cả hai đại lục Á và Âu?", "Istanbul", "Moscow", "Cairo", "Tbilisi", "Istanbul (Thổ Nhĩ Kỳ) được chia cắt bởi eo biển Bosphorus."],
        ["Hồ nước mặn lớn nhất thế giới tính theo diện tích?", "Biển Caspi", "Hồ Superior", "Hồ Michigan", "Hồ Baikal", "Biển Caspi thực chất là một hồ nước mặn khổng lồ."],
        ["Đỉnh núi cao nhất châu Âu là?", "Elbrus", "Mont Blanc", "Matterhorn", "Olympus", "Đỉnh Elbrus (5.642m) thuộc dãy Caucasus."],
        ["Sông chảy qua nhiều quốc gia nhất thế giới (10 quốc gia)?", "Sông Danube", "Sông Rhine", "Sông Volga", "Sông Seine", "Sông Danube bắt nguồn từ Đức và đổ ra Biển Đen."],
        ["Quốc gia sở hữu số lượng hòn đảo nhiều nhất thế giới?", "Thụy Điển", "Na Uy", "Phần Lan", "Canada", "Thụy Điển sở hữu hơn 267.000 hòn đảo lớn nhỏ."],
        ["Hồ Titicaca - hồ nước ngọt cao nhất thế giới giáp 2 nước nào?", "Peru và Bolivia", "Chile và Argentina", "Colombia và Ecuador", "Brazil và Paraguay", "Titicaca ở độ cao 3.812 m trên dãy Andes."],
        ["Đảo quốc Socotra có loài cây máu rồng độc đáo thuộc nước nào?", "Yemen", "Somalia", "Oman", "Madagascar", "Socotra nổi tiếng với sự đa dạng sinh học độc đáo."]
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
        ["Lễ hội ném cà chua La Tomatina diễn ra ở?", "Tây Ban Nha", "Ý", "Bồ Đào Nha", "Pháp", "Hàng chục tấn cà chua được dùng trong một giờ!"],
        ["Tháp Eiffel – biểu tượng văn hóa nổi tiếng ở nước nào?", "Pháp", "Anh", "Ý", "Đức", "Tháp Eiffel nằm bên sông Seine ở thủ đô Paris."],
        ["Vạn Lý Trường Thành là công trình vĩ đại của nước nào?", "Trung Quốc", "Nhật Bản", "Ấn Độ", "Mông Cổ", "Trải dài hàng nghìn kilômét qua các triều đại."],
        ["Đền Taj Mahal – biểu tượng tình yêu ở nước nào?", "Ấn Độ", "Iran", "Thổ Nhĩ Kỳ", "Pakistan", "Taj Mahal được xây bằng đá cẩm thạch trắng."],
        ["Tượng Chúa Cứu Thế đứng trên đỉnh núi Corcovado ở đâu?", "Brazil", "Argentina", "Tây Ban Nha", "Peru", "Tượng nằm tại thành phố Rio de Janeiro."],
        ["Tháp đồng hồ Big Ben nổi tiếng nằm ở thủ đô nào?", "London", "Paris", "Berlin", "Roma", "Big Ben nằm ở tháp đồng hồ nhà quốc hội Anh tại London."],
        ["Tượng Nữ thần Tự do là quà tặng của nước nào dành cho Mỹ?", "Pháp", "Anh", "Đức", "Ý", "Pháp tặng tượng cho Mỹ nhân kỷ niệm 100 năm độc lập."],
        ["Điệu múa Yosakoi sôi động rực rỡ sắc màu xuất xứ từ?", "Nhật Bản", "Hàn Quốc", "Trung Quốc", "Thái Lan", "Yosakoi kết hợp âm nhạc truyền thống và hiện đại."]
      ],
      medium: [
        ["Điệu nhảy chiến binh Haka gắn với dân tộc nào?", "Māori (New Zealand)", "Aboriginal (Úc)", "Hawaii", "Samoa", "Đội tuyển rugby All Blacks biểu diễn Haka trước trận đấu."],
        ["Hanbok là trang phục truyền thống của nước nào?", "Hàn Quốc", "Nhật Bản", "Trung Quốc", "Mông Cổ", "Hanbok có màu sắc tươi tắn và đường nét mềm mại."],
        ["Lễ hội đèn trời Loy Krathong diễn ra ở nước nào?", "Thái Lan", "Lào", "Campuchia", "Myanmar", "Người dân thả hoa đăng lên sông và đèn trời lên không trung."],
        ["Điệu nhảy Samba quyến rũ xuất xứ từ quốc gia nào?", "Brazil", "Tây Ban Nha", "Cuba", "Argentina", "Samba biểu tượng cho tinh thần cuồng nhiệt của Brazil."],
        ["Lễ hội Té nước Songkran mừng năm mới ở nước nào?", "Thái Lan", "Nhật Bản", "Ấn Độ", "Philippines", "Mọi người tạt nước vào nhau để xua đi điều xui xẻo."],
        ["Trang phục truyền thống Kilt (váy caro nam) thuộc về?", "Scotland", "Ireland", "Anh", "Xứ Wales", "Kilt gắn liền với văn hóa các tộc người Scotland."],
        ["Điệu nhảy Waltz lãng mạn bắt nguồn từ nước nào?", "Áo", "Pháp", "Ý", "Nga", "Waltz phát triển rực rỡ ở thủ đô Vienna (Áo)."],
        ["Lễ hội hóa trang Venice với những chiếc mặt nạ thuộc?", "Ý", "Pháp", "Tây Ban Nha", "Bồ Đào Nha", "Diễn ra hàng năm tại thành phố Venice."],
        ["Nghệ thuật múa Rối bóng Wayang Kulit là di sản của?", "Indonesia", "Malaysia", "Thái Lan", "Myanmar", "Dùng con rối bằng da trâu diễn trên màn vải trắng."],
        ["Đền Angkor Wat - di sản tôn giáo lớn nhất thế giới ở đâu?", "Campuchia", "Lào", "Thái Lan", "Myanmar", "Đền được in trên quốc kỳ của Campuchia."],
        ["Lễ hội Mardi Gras nổi tiếng nhất ở thành phố nào của Mỹ?", "New Orleans", "New York", "Los Angeles", "Miami", "Mardi Gras đặc trưng với các cuộc diễu hành rực rỡ."],
        ["Trang phục truyền thống Cheongsam (Sườn xám) thuộc về?", "Trung Quốc", "Nhật Bản", "Hàn Quốc", "Việt Nam", "Sườn xám tôn lên vóc dáng thanh lịch duyên dáng."]
      ],
      hard: [
        ["Điệu nhảy Flamenco sôi động bắt nguồn từ vùng nào?", "Andalusia (Tây Ban Nha)", "Catalonia", "Madrid", "Basque", "Flamenco kết hợp giữa hát, đàn guitar và điệu múa."],
        ["Lễ hội Ngày của người chết (Día de los Muertos) ở đâu?", "Mexico", "Tây Ban Nha", "Peru", "Chile", "Lễ hội tưởng nhớ người quá cố với trang điểm hình đầu lâu."],
        ["Trang phục truyền thống Sari quyến rũ thuộc văn hóa nào?", "Ấn Độ", "Nhật Bản", "Ả Rập", "Ai Cập", "Sari là tấm vải dài quấn quanh cơ thể người phụ nữ."],
        ["Điệu múa Tango lãng mạn có nguồn gốc từ vùng biên giới?", "Argentina và Uruguay", "Brazil và Argentina", "Chile và Peru", "Colombia và Venezuela", "Tango xuất thân từ các khu cảng ven sông Rió de la Plata."],
        ["Lễ hội Băng đăng Harbin lớn nhất thế giới diễn ra ở?", "Trung Quốc", "Nga", "Canada", "Thụy Điển", "Thành phố Cáp Nhĩ Tân có các công trình băng khổng lồ."],
        ["Điệu múa Sufi Whirling xoay tròn liên tục thuộc nước nào?", "Thổ Nhĩ Kỳ", "Iran", "Ai Cập", "Morocco", "Điệu múa tâm linh của dòng Hồi giáo Sufi."],
        ["Nhạc cụ truyền thống Didgeridoo (ống thổi gỗ dài) thuộc về?", "Thổ dân Úc", "Maori", "Inca", "Eskimo", "Được chế tác bởi người thổ dân Aboriginal Úc."],
        ["Di tích Machu Picchu - thành phố cổ ẩn trên mây nằm ở?", "Peru", "Bolivia", "Colombia", "Ecuador", "Nằm ở độ cao 2.430 m trên dãy Andes."],
        ["Lễ hội Inti Raymi (Lễ hội Mặt Trời của người Inca) ở đâu?", "Peru", "Chile", "Argentina", "Brazil", "Tổ chức tại thành phố Cusco (Peru) vào hạ chí."],
        ["Loại hình sân khấu truyền thống Kabuki thuộc nước nào?", "Nhật Bản", "Trung Quốc", "Hàn Quốc", "Thái Lan", "Di sản văn hóa phi vật thể đại diện của nhân loại."],
        ["Lễ hội Đèn lồng Pingxi thả đèn trời nổi tiếng ở đâu?", "Đài Loan", "Singapore", "Hong Kong", "Malaysia", "Pingxi thả hàng ngàn đèn trời vào Tết Nguyên Tiêu."],
        ["Điệu múa kịch Kathakali với gương mặt trang điểm thuộc nước nào?", "Ấn Độ", "Nepal", "Sri Lanka", "Myanmar", "Kathakali là kịch múa cổ điển miền Nam Ấn Độ."]
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
        ["Tết Trung thu diễn ra vào ngày nào âm lịch?", "15 tháng 8", "15 tháng 1", "5 tháng 5", "1 tháng 10", "Đêm rằm tháng Tám trăng tròn nhất năm."],
        ["Lễ hội Chùa Hương nổi tiếng ở tỉnh/thành nào?", "Hà Nội", "Ninh Bình", "Quảng Ninh", "Hà Nam", "Hội chùa Hương kéo dài từ mùng 6 tháng Giêng đến hết tháng 3 âm lịch."],
        ["Trang phục truyền thống biểu tượng của người phụ nữ Việt Nam?", "Áo dài", "Áo tứ thân", "Áo bà ba", "Áo chàm", "Áo dài đại diện cho vẻ đẹp duyên dáng Việt Nam."],
        ["Múa rối nước là nghệ thuật dân gian xuất xứ từ miền nào?", "Miền Bắc", "Miền Trung", "Miền Nam", "Tây Nguyên", "Người nghệ sĩ điều khiển con rối dưới nước đằng sau mành."],
        ["Lễ hội đua ghe Ngo là sự kiện đặc sắc của dân tộc nào?", "Khmer", "Chăm", "Hoa", "Tày", "Thường diễn ra trong dịp lễ Óoc Om Bóc ở Sóc Trăng."],
        ["Phố cổ Hội An nổi tiếng thuộc tỉnh nào?", "Quảng Nam", "Thừa Thiên Huế", "Bình Định", "Đà Nẵng", "Phố cổ Hội An lưu giữ kiến trúc đô thị thương cảng cổ."],
        ["Lễ hội Giỗ Tổ Hùng Vương tổ chức vào ngày âm lịch nào?", "10 tháng 3", "15 tháng 1", "5 tháng 5", "1 tháng 8", "Dù ai đi ngược về xuôi / Nhớ ngày Giỗ Tổ mùng mười tháng ba."],
        ["Đền Ngọc Sơn nằm giữa hồ nào của Hà Nội?", "Hồ Hoàn Kiếm", "Hồ Tây", "Hồ Trúc Bạch", "Hồ Ba Bể", "Đền Ngọc Sơn nối với bờ bằng cầu Thê Húc màu đỏ."]
      ],
      medium: [
        ["Không gian văn hóa Cồng chiêng thuộc vùng nào?", "Tây Nguyên", "Tây Bắc", "Đồng bằng sông Hồng", "Đông Nam Bộ", "Cồng chiêng gắn với đời sống của nhiều dân tộc Tây Nguyên."],
        ["Lễ hội Giỗ Tổ Hùng Vương được tổ chức ở tỉnh nào?", "Phú Thọ", "Bắc Ninh", "Hà Nội", "Ninh Bình", "Lễ hội diễn ra vào mùng 10 tháng 3 âm lịch tại Đền Hùng."],
        ["Làng nghề làm gốm sứ Bát Tràng nổi tiếng thuộc?", "Hà Nội", "Bắc Ninh", "Hải Dương", "Vĩnh Phúc", "Làng gốm có lịch sử hơn 500 năm bên sông Hồng."],
        ["Cố đô Hoa Lư thuộc tỉnh nào?", "Ninh Bình", "Thanh Hóa", "Thừa Thiên Huế", "Quảng Bình", "Hoa Lư là kinh đô đầu tiên của nhà nước phong kiến tập quyền Việt Nam."],
        ["Lễ hội Vía Bà Chúa Xứ núi Sam nổi tiếng ở tỉnh nào?", "An Giang", "Kiên Giang", "Đồng Tháp", "Cần Thơ", "Thu hút hàng triệu du khách hành hương mỗi năm tại Châu Đốc."],
        ["Dân ca Ví, Giặm là di sản văn hóa của 2 tỉnh nào?", "Nghệ An và Hà Tĩnh", "Thanh Hóa và Nghệ An", "Quảng Bình và Quảng Trị", "Thừa Thiên Huế và Đà Nẵng", "Được UNESCO công nhận năm 2014."],
        ["Chiếc nón lá bài thơ nổi tiếng gắn liền với địa danh nào?", "Huế", "Quảng Nam", "Bình Định", "Hà Nội", "Soi nón bài thơ Huế lên ánh sáng thấy hình ảnh thơ văn."],
        ["Hội Gióng đền Phù Đổng và đền Sóc thuộc thành phố nào?", "Hà Nội", "Bắc Ninh", "Vĩnh Phúc", "Hưng Yên", "Tưởng nhớ vị anh hùng Thánh Gióng đánh giặc Ân."],
        ["Nghệ thuật Bài Chòi là di sản văn hóa phổ biến ở miền nào?", "Trung Bộ", "Bắc Bộ", "Nam Bộ", "Tây Nguyên", "Thường diễn ra trong các dịp lễ Tết ở Quảng Nam, Bình Định."],
        ["Lễ hội Yên Thế gắn liền với anh hùng dân tộc nào ở Bắc Giang?", "Hoàng Hoa Thám", "Trương Định", "Nguyễn Trung Trực", "Ba Tơ", "Cuộc khởi nghĩa Yên Thế kéo dài gần 30 năm."],
        ["Nghệ thuật Đúc đồng truyền thống Đông Sơn nổi tiếng ở?", "Thanh Hóa", "Bắc Ninh", "Nam Định", "Thái Bình", "Trống đồng Đông Sơn là đỉnh cao nghệ thuật đúc đồng."],
        ["Di tích Chùa Cầu biểu tượng Hội An do ai xây dựng?", "Thương nhân Nhật Bản", "Thương nhân Trung Quốc", "Thương nhân Bồ Đào Nha", "Thương nhân Hà Lan", "Chùa Cầu còn có tên gọi là Cầu Nhật Bản."]
      ],
      hard: [
        ["Hát Xoan là loại hình dân ca lễ nghi gắn liền với tỉnh nào?", "Phú Thọ", "Vĩnh Phúc", "Bắc Giang", "Thái Nguyên", "Hát Xoan gắn liền với tín ngưỡng thờ cúng Hùng Vương."],
        ["Loại hình Hát Then truyền thống thuộc về dân tộc nào?", "Tày, Nùng, Thái", "H'Mông, Dao", "Mường, Ba Na", "Chăm, Khmer", "Hát Then là di sản văn hóa phi vật thể đại diện của nhân loại."],
        ["Nghệ thuật Xòe Thái vừa được UNESCO vinh danh thuộc vùng?", "Tây Bắc", "Đông Bắc", "Tây Nguyên", "Đồng bằng Nam Bộ", "Xòe Thái biểu trưng cho sự đoàn kết của người Thái."],
        ["Tín ngưỡng thờ Mẫu Tam phủ của người Việt được ghi danh năm nào?", "2016", "2010", "2019", "2012", "Tín ngưỡng tôn vinh các Thánh Mẫu cai quản 3 cõi."],
        ["Lễ hội Tràng An - di sản hỗn hợp duy nhất ở ĐNÁ thuộc tỉnh?", "Ninh Bình", "Quảng Ninh", "Thanh Hóa", "Cao Bằng", "Quần thể danh thắng Tràng An sở hữu giá trị toàn cầu."],
        ["Nghệ thuật gốm Chăm vừa được UNESCO vinh danh thuộc tỉnh?", "Ninh Thuận", "Bình Thuận", "Khánh Hòa", "Phú Yên", "Nổi tiếng với làng gốm Bàu Trúc thủ công lâu đời."],
        ["Ca trứ truyền thống được UNESCO công nhận năm 2009 thuộc vùng?", "Bắc Bộ", "Nam Bộ", "Tây Nguyên", "Duyên hải Nam Trung Bộ", "Ca trứ là loại hình nghệ thuật hát thảm độc đáo."],
        ["Lễ hội Lồng Tồng (Xuống đồng) lớn nhất của dân tộc nào?", "Tày - Nùng", "H'Mông", "Thái", "Mường", "Cầu cho mưa thuận gió hòa, mùa màng bội thu."],
        ["Tỉnh nào sở hữu di sản văn hóa thế giới Tháp Chàm Mỹ Sơn?", "Quảng Nam", "Bình Định", "Ninh Thuận", "Khánh Hòa", "Thánh địa Mỹ Sơn là di sản UNESCO từ năm 1999."],
        ["Lễ hội Ka-tê là lễ hội truyền thống lớn nhất của dân tộc nào?", "Chăm", "Khmer", "Hoa", "Raglai", "Thường tổ chức tại các tháp Chàm ở Ninh Thuận, Bình Thuận."],
        ["Tín ngưỡng Cấp sắc là nghi lễ trưởng thành của dân tộc nào?", "Dao", "H'Mông", "Tày", "Nùng", "Lễ Cấp sắc công nhận sự trưởng thành của nam giới người Dao."],
        ["Điệu múa Râm-vông chầm chậm uyển chuyển là của dân tộc nào?", "Khmer", "Chăm", "Tày", "Hoa", "Râm-vông là điệu múa lâm thôn phổ biến của người Khmer."]
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
        ["Bánh tráng nướng “pizza Việt Nam” nổi tiếng ở?", "Đà Lạt", "Hà Nội", "Cần Thơ", "Quy Nhơn", "Món ăn vặt hợp trời se lạnh của phố núi."],
        ["Bánh mì cay nhỏ gọn là đặc sản của thành phố nào?", "Hải Phòng", "Hà Nội", "Nam Định", "Thanh Hóa", "Bánh mì cay Hải Phòng kẹp pate thơm lừng và chí chương."],
        ["Món Cốm làng Vòng thơm dẻo gắn liền với mùa thu ở đâu?", "Hà Nội", "Huế", "Đà Nẵng", "Cần Thơ", "Cốm được gói trong lá sen thơm mát."],
        ["Bánh đậu xanh nổi tiếng nhất ở tỉnh nào miền Bắc?", "Hải Dương", "Hưng Yên", "Thái Bình", "Nam Định", "Bánh đậu xanh thưởng thức cùng trà nóng rất hợp."],
        ["Bánh pía sầu riêng nức tiếng là đặc sản tỉnh nào?", "Sóc Trăng", "Bến Tre", "Cần Thơ", "Tiền Giang", "Bánh pía Sóc Trăng có lớp vỏ xếp nhiều tầng mỏng."],
        ["Món Bún đậu mắm tôm ngon chuẩn vị có nguồn gốc từ đâu?", "Hà Nội", "Hải Phòng", "Huế", "Sài Gòn", "Món ăn gồm bún lá, đậu rán giòn, chả cốm và mắm tôm đánh bọt."],
        ["Bánh chưng, bánh giầy gắn liền với vị hoàng tử nào?", "Lang Liêu", "An Dương Vương", "Mai An Tiêm", "Thạch Sanh", "Lang Liêu dâng bánh chưng hình vuông tượng trưng cho Đất."],
        ["Món Bún chả nướng than hoa nổi tiếng trứ danh ở đâu?", "Hà Nội", "Hải Phòng", "Huế", "Sài Gòn", "Bún chả Hà Nội từng được Tổng thống Obama thưởng thức."]
      ],
      medium: [
        ["Chả cá Lã Vọng là đặc sản của?", "Hà Nội", "Hải Phòng", "Huế", "Đà Nẵng", "Món ăn có thì là và hành, ăn với bún và mắm tôm."],
        ["Mì Quảng là món ăn mang hương vị đặc trưng của tỉnh nào?", "Quảng Nam", "Quảng Ngãi", "Quảng Bình", "Quảng Trị", "Mì Quảng ăn kèm bánh tráng nướng và lạc rang."],
        ["Nem chua nổi tiếng nhất ở tỉnh nào miền Trung?", "Thanh Hóa", "Nghệ An", "Hà Tĩnh", "Quảng Bình", "Nem chua Thanh Hóa có vị chua dịu, cay thơm tỏi ớt."],
        ["Bánh xèo giòn rụm kích thước lớn là đặc sản vùng nào?", "Miền Tây Nam Bộ", "Miền Bắc", "Tây Nguyên", "Tây Bắc", "Bánh xèo miền Tây ăn kèm rất nhiều loại rau rừng."],
        ["Món Bún cá quậy / Bún cá chấm nổi tiếng ở thành phố biển nào?", "Quy Nhơn", "Nha Trang", "Phan Thiết", "Hải Phòng", "Bún cá Quy Nhơn có chả cá chiên giòn thơm nức."],
        ["Món Bánh khọt tôm nhảy giòn rụm nổi tiếng ở tỉnh nào?", "Bà Rịa - Vũng Tàu", "Kiên Giang", "Bến Tre", "Cà Mau", "Bánh khọt Vũng Tàu cuốn rau sống chấm nước mắm."],
        ["Món Cơm hến cay nồng là đặc sản đặc trưng của vùng nào?", "Huế", "Quảng Trị", "Đà Nẵng", "Quảng Bình", "Cơm hến gồm hến xào, nước hến nóng và mắm ruốc."],
        ["Món Bánh căn đổ khuôn đất nướng giòn phổ biến ở đâu?", "Nam Trung Bộ (Ninh Thuận, Đà Lạt)", "Tây Bắc", "Đồng bằng sông Hồng", "Đông Nam Bộ", "Bánh căn chấm nước mắm nêm hoặc xíu mại nóng."],
        ["Món Vịt quay mắc mật thơm lừng là đặc sản nổi tiếng ở đâu?", "Lạng Sơn", "Cao Bằng", "Hà Giang", "Bắc Kạn", "Lá mắc mật tạo nên hương vị đặc trưng cho vịt quay."],
        ["Món Bánh canh chả cá nổi tiếng ở tỉnh thành miền Trung nào?", "Nha Trang (Khánh Hòa)", "Phan Thiết", "Quy Nhơn", "Huế", "Sợi bánh canh mềm dai ăn cùng chả cá thu tươi."],
        ["Món Nem lụi nướng sả thơm nức là đặc sản vùng nào?", "Huế", "Hà Nội", "Sài Gòn", "Cần Thơ", "Nem lụi quấn bánh tráng rau sống chấm sốt tương đậu."],
        ["Món Bánh cuốn chả mực ngon giòn sần sật nổi tiếng ở đâu?", "Quảng Ninh", "Hải Phòng", "Nam Định", "Thanh Hóa", "Bánh cuốn nóng ăn cùng chả mực chiên vàng giòn."]
      ],
      hard: [
        ["Món “Bún quậy” độc đáo nổi tiếng ở địa danh nào?", "Phú Quốc", "Côn Đảo", "Lý Sơn", "Cát Bà", "Thực khách tự tay quậy nước chấm gồm muối, đường, ớt, tắc."],
        ["Món “Bún suông” có tạo hình giòn dai đặc sản của tỉnh nào?", "Trà Vinh", "Sóc Trăng", "Bạc Liêu", "Cà Mau", "Chả tôm trong bún suông được nặn hình con suông."],
        ["Thắng cố là món ăn truyền thống độc đáo của vùng nào?", "Tây Bắc", "Tây Nguyên", "Đồng bằng sông Cửu Long", "Duyên hải Nam Trung Bộ", "Thắng cố truyền thống được nấu từ nội tạng ngựa."],
        ["Món “Khâu nhục” mềm ngậy trong các dịp lễ Tết thuộc tỉnh nào?", "Lạng Sơn", "Sơn La", "Điện Biên", "Yên Bái", "Món thịt heo quay nướng ướp gia vị đồ chín mềm."],
        ["Món “Cá kho làng Vũ Đại” trứ danh thuộc tỉnh nào?", "Hà Nam", "Nam Định", "Ninh Bình", "Thái Bình", "Cá trắm đen kho trong niêu đất suốt 12-16 tiếng."],
        ["Món “Chả mực giã tay” ngon giòn sần sật nổi tiếng ở đâu?", "Quảng Ninh", "Hải Phòng", "Thái Bình", "Nam Định", "Mực mai tươi sống được giã thủ công bằng tay."],
        ["Món “Bún mắm” đậm đà thơm mùi mắm sặc là đặc sản của?", "Miền Tây Nam Bộ", "Miền Trung", "Tây Bắc", "Đông Nam Bộ", "Bún mắm Nam Bộ ăn kèm vô số loại rau đồng quê."],
        ["Món “Cháo ấu tẩu” đắng ngọt bổ dưỡng là đặc sản độc đáo tỉnh nào?", "Hà Giang", "Cao Bằng", "Lào Cai", "Lai Châu", "Củ ấu tẩu được ninh kỹ loại bỏ độc tố tạo thành cháo."],
        ["Món “Bánh tét lá cẩm” màu tím tươi đẹp mắt nổi tiếng ở đâu?", "Cần Thơ", "Vĩnh Long", "Tiền Giang", "Bến Tre", "Màu tím của bánh được làm tự nhiên từ lá cẩm."],
        ["Món “Bánh tráng xoài” dẻo ngọt chua dịu là đặc sản của?", "Cam Ranh (Khánh Hòa)", "Bình Thuận", "Phú Yên", "Bình Định", "Bánh làm từ quả xoài chín tự nhiên cô đặc xấy dẻo."],
        ["Món Bún ốc thanh chua dấm bỗng truyền thống thuộc về?", "Hà Nội", "Ninh Bình", "Sơn La", "Bắc Giang", "Bún ốc Hà Nội dùng nước ốc thanh chua dấm bỗng thơm ngậy."],
        ["Món Vịt quay 7 vị đặc sản núi rừng thuộc tỉnh nào?", "Cao Bằng", "Lạng Sơn", "Tuyên Quang", "Thái Nguyên", "Vịt quay 7 vị Cao Bằng tẩm ướp thảo mộc núi rừng đặc trưng."]
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
        ["Tom Yum là món canh chua cay của?", "Thái Lan", "Malaysia", "Lào", "Campuchia", "Món có sả, lá chanh và riềng."],
        ["Hamburger nguyên bản bắt nguồn từ thành phố Hamburg của?", "Đức", "Mỹ", "Anh", "Hà Lan", "Tên gọi Hamburgers bắt nguồn từ thành phố Hamburg."],
        ["Món mì Spaghetti sốt bò hăm nổi tiếng của quốc gia nào?", "Ý", "Pháp", "Tây Ban Nha", "Thụy Sĩ", "Mì Ý ăn kèm sốt cà chua và phô mai bào."],
        ["Món lẩu Tứ Xuyên cay nồng trứ danh của nước nào?", "Trung Quốc", "Nhật Bản", "Hàn Quốc", "Thái Lan", "Lẩu có hoa tiêu Tứ Xuyên tạo vị tê cay đặc trưng."],
        ["Bánh mì Kebab cuộn tròn nướng lò là món ăn đường phố của?", "Thổ Nhĩ Kỳ", "Hy Lạp", "Ai Cập", "Pháp", "Döner Kebab được yêu thích trên toàn thế giới."],
        ["Món cơm gà Hainan (Hải Nam) nổi tiếng nhất tại?", "Singapore", "Việt Nam", "Philippines", "Indonesia", "Cơm gà Hải Nam là món ăn quốc gia của Singapore."],
        ["Bánh Donut tròn xoay có lỗ ở giữa nổi tiếng phổ biến nhất tại?", "Mỹ", "Pháp", "Ý", "Nhật Bản", "Donut là món bánh ngọt ăn sáng yêu thích tại Mỹ."],
        ["Món Lẩu Thái Tom Yum cay nồng nước cốt dừa là của?", "Thái Lan", "Việt Nam", "Lào", "Malaysia", "Vị chua cay mặn ngọt hòa quyện độc đáo."]
      ],
      medium: [
        ["Paella – cơm hải sản chảo lớn – đến từ?", "Tây Ban Nha", "Ý", "Bồ Đào Nha", "Hy Lạp", "Paella có gốc từ vùng Valencia."],
        ["Poutine – khoai chiên phủ phô mai và nước sốt – của?", "Canada", "Mỹ", "Anh", "Úc", "Poutine ra đời ở vùng Québec."],
        ["Dimsum là nét tinh túy ẩm thực của quốc gia nào?", "Trung Quốc", "Nhật Bản", "Hàn Quốc", "Việt Nam", "Dimsum bao gồm các món hấp trong lồng tre nhỏ."],
        ["Bánh sừng bò (Croissant) nổi tiếng gắn liền với nước nào?", "Pháp", "Ý", "Đức", "Tây Ban Nha", "Chiếc bánh có hình trăng khuyết giòn xốp."],
        ["Món Mì Ramen sợi vàng đậm đà là niềm tự hào của?", "Nhật Bản", "Hàn Quốc", "Trung Quốc", "Việt Nam", "Nước dùng Ramen ninh từ xương lợn hoặc cá biển."],
        ["Món Cà ri Massaman thơm béo bơ đậu nướng đến từ?", "Thái Lan", "Ấn Độ", "Indonesia", "Malaysia", "Massaman từng được xếp hạng món ăn ngon hàng đầu thế giới."],
        ["Món Tokbokki (bánh gạo cay) màu đỏ hấp dẫn là của?", "Hàn Quốc", "Nhật Bản", "Trung Quốc", "Triều Tiên", "Bánh gạo đun trong sốt ớt Gochujang cay ngọt."],
        ["Bánh Macaron sắc màu quyến rũ nổi tiếng nhất ở đâu?", "Pháp", "Ý", "Thụy Sĩ", "Bỉ", "Macaron làm từ lòng trắng trứng, đường bột và hạnh nhân."],
        ["Món Fish and Chips (Cá chiên giòn ăn kèm khoai) là đặc sản của?", "Anh", "Úc", "Mỹ", "Canada", "Món ăn truyền thống phổ biến khắp nước Anh."],
        ["Món Súp Củ Cải Đỏ (Borscht) màu đỏ thắm là đặc sản của?", "Ukraine / Đông Âu", "Pháp", "Đức", "Ý", "Borscht có màu đỏ tự nhiên từ củ dền."],
        ["Món Tiramisu vị cà phê ca cao béo ngậy xuất xứ từ?", "Ý", "Pháp", "Thụy Sĩ", "Áo", "Tiramisu trong tiếng Ý nghĩa là “Hãy kéo tôi lên”."],
        ["Bánh bao Kim Sa nhân trứng muối tan chảy độc đáo của?", "Hồng Kông / Trung Quốc", "Nhật Bản", "Hàn Quốc", "Đài Loan", "Bánh bao nhân trứng muối béo ngậy hấp nóng."]
      ],
      hard: [
        ["Món Rendang – thịt kho nước cốt dừa sệt cay – của nước nào?", "Indonesia", "Malaysia", "Thái Lan", "Philippines", "Rendang từng được bình chọn là món ăn ngon nhất thế giới."],
        ["Món Fondue (lẩu phô mai nóng chảy) là đặc sản của?", "Thụy Sĩ", "Pháp", "Áo", "Bỉ", "Thực khách nhúng khối xiên bánh mì vào nồi phô mai nóng."],
        ["Món Kebab cuộn thịt nướng thơm lừng xuất xứ từ?", "Thổ Nhĩ Kỳ", "Hy Lạp", "Ai Cập", "Iran", "Döner Kebab rất phổ biến trên toàn thế giới."],
        ["Món Haggis (dạ dày cừu nhồi yến mạch) là món ăn quốc gia của?", "Scotland", "Ireland", "Xứ Wales", "Anh", "Haggis là món ăn truyền thống dịp lễ của người Scotland."],
        ["Món Ceviche (gỏi hải sản tái chanh tươi) nổi tiếng ở nước nào?", "Peru", "Brazil", "Argentina", "Chile", "Ceviche làm từ cá tươi ướp nước cốt chanh tươi và ớt."],
        ["Món Goulash (súp thịt bò hầm ớt bột Paprika) thuộc?", "Hungary", "Áo", "Ba Lan", "Cộng hòa Séc", "Goulash có màu đỏ rực từ loại ớt bột đặc sản Paprika."],
        ["Món Súp Miso truyền thống dùng trong mọi bữa ăn của?", "Nhật Bản", "Hàn Quốc", "Trung Quốc", "Việt Nam", "Làm từ tương đậu nành Miso lên men và rong biển."],
        ["Bánh Nasi Lemak (cơm nấu nước cốt dừa kèm cá khô) thuộc?", "Malaysia", "Indonesia", "Thái Lan", "Brunei", "Nasi Lemak thường gói trong lá chuối xanh."],
        ["Món Escargot (Ốc bươu nướng bơ tỏi) là món ăn xa xỉ của?", "Pháp", "Ý", "Tây Ban Nha", "Bỉ", "Ốc bươu được chế biến cùng bơ, tỏi và rau mùi tây."],
        ["Món Jamón Ibérico (đùi heo muối xông khói) thượng hạng thuộc?", "Tây Ban Nha", "Ý", "Pháp", "Bồ Đào Nha", "Đùi heo muối từ giống heo đen Iberico đắt đỏ bậc nhất."],
        ["Món Churros (bánh quẩy chiên giòn chấm sô-cô-la) xuất xứ từ?", "Tây Ban Nha", "Ý", "Pháp", "Brazil", "Churros là món ăn sáng và ăn vặt truyền thống Tây Ban Nha."],
        ["Món Súp Gumbo sệt cay nồng đậm đà gia vị Cajun là của?", "Louisiana (Mỹ)", "Mexico", "Jamaica", "Cuba", "Gumbo kết hợp hải sản, xúc xích và gia vị đặc trưng Cajun."]
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
        ["h|#ce1126,#fff", "Indonesia", "Cờ Indonesia gồm hai màu đỏ và trắng."],
        ["h|#fff,#dc143c", "Ba Lan", "Hai màu trắng–đỏ truyền thống."],
        ["h|#0057b7,#ffd700", "Ukraine", "Xanh bầu trời và vàng đồng lúa mì."],
        ["v|#000,#fdda24,#ef3340", "Bỉ", "Cờ Bỉ lấy màu từ huy hiệu của công quốc Brabant."],
        ["h|#ed2939,#fff,#ed2939", "Áo", "Cờ Áo ba dải ngang đỏ–trắng–đỏ."],
        ["h|#fff,#0039a6,#d52b1e", "Nga", "Cờ ba sắc trắng–xanh–đỏ."],
        ["v|#0051ba,#ffda44,#d80027", "Romania", "Cờ Romania ba sắc đứng xanh–vàng–đỏ."],
        ["h|#007a3d,#fff,#007a3d", "Nigeria", "Cờ Nigeria gồm 3 dải đứng xanh lá–trắng–xanh lá."]
      ],
      medium: [
        ["v|#009246,#fff,#ce2b37", "Ý", "Cờ Ý có màu xanh lá, trắng và đỏ."],
        ["h|#a51931*1,#fff*1,#2d2a4a*2,#fff*1,#a51931*1", "Thái Lan", "Cờ năm dải ngang ba màu Trairong."],
        ["h|#ae1c28,#fff,#21468b", "Hà Lan", "Cờ ba sắc đỏ–trắng–xanh dương."],
        ["v|#169b62,#fff,#ff883e", "Ireland", "Ba dải đứng xanh lá–trắng–cam."],
        ["v|#002b7f,#fcd116,#ce1126", "Chad", "Cờ Chad có màu sắc gần như trùng khớp hoàn toàn với Romania!"],
        ["h|#ff9933,#fff,#128807", "Ấn Độ", "Cờ ba màu cam–trắng–xanh lá."],
        ["h|#006a4e,#f2a800,#d21034", "Gabon", "Cờ Gabon gồm ba dải ngang xanh lá–vàng–xanh dương."],
        ["h|#00247d,#fff,#ce1126", "Luxembourg", "Cờ Luxembourg ba sắc đỏ–trắng–xanh lam sáng."],
        ["h|#009a44,#ffd100,#c8102e", "Lithuania", "Cờ 3 dải ngang vàng–xanh lá–đỏ."],
        ["h|#002f6c,#fff,#c8102e", "Costa Rica", "Cờ Costa Rica có dải đỏ lớn ở giữa."],
        ["h|#000,#009a44,#c8102e", "Malawi", "Cờ 3 dải ngang đen–đỏ–xanh lá."],
        ["h|#00247d,#fff,#d52b1e", "Paraguay", "Cờ 3 dải ngang đỏ–trắng–xanh dương."]
      ],
      hard: [
        ["v|#0033a0,#fed100,#c8102e", "Andorra", "Cờ Andorra gồm 3 dải đứng xanh–vàng–đỏ."],
        ["h|#0072ce,#fff,#0072ce", "Honduras", "Cờ Honduras xanh lam nhạt và trắng."],
        ["h|#ce1126,#0033a0,#ce1126", "Lào", "Cờ Lào có đĩa tròn màu trắng ở giữa."],
        ["v|#00205b,#fff,#00205b", "Guatemala", "Cờ Guatemala 3 dải đứng xanh lam–trắng–xanh lam."],
        ["h|#00a859,#fff,#00a859", "Nigeria", "Cờ 3 dải đứng xanh–trắng–xanh."],
        ["v|#11457e,#fff,#11457e", "El Salvador", "Cờ 3 dải đứng xanh lam–trắng–xanh lam."],
        ["h|#000,#fff,#000", "Bavaria (Đức)", "Màu cờ truyền thống hai sắc đen trắng."],
        ["v|#11457e,#fff,#11457e", "Nicaragua", "Cờ 3 dải ngang xanh–trắng–xanh."],
        ["h|#00205b,#fff,#00205b", "San Marino", "Cờ hai dải ngang trắng và xanh lam."],
        ["h|#0055a4,#fff,#0055a4", "Argentina", "Cờ ba dải ngang xanh lam và trắng."],
        ["v|#169b62,#fff,#169b62", "Pakistan", "Cờ lá cây xanh với dải trắng bên lề."],
        ["h|#00247d,#fff,#00247d", "Uruguay", "Cờ các dải trắng và xanh lam xen kẽ."]
      ]
    }
  }
];

export const FL = [
  ["vn", "Việt Nam", "Quốc kỳ đỏ sao vàng năm cánh."],
  ["jp", "Nhật Bản", "Cờ Nhật có tên là Nisshōki – “cờ mặt trời”."],
  ["v|#0055a4,#fff,#ef4135", "Pháp", "Cờ tam sắc xanh–trắng–đỏ."],
  ["v|#009246,#fff,#ce2b37", "Ý", "Cờ Ý có màu xanh lá, trắng và đỏ."],
  ["h|#000,#dd0000,#ffce00", "Đức", "Màu đen–đỏ–vàng xuất hiện từ phong trào thống nhất nước Đức."],
  ["h|#a51931*1,#fff*1,#2d2a4a*2,#fff*1,#a51931*1", "Thái Lan", "Gọi là cờ “Trairong” – cờ ba màu."],
  ["h|#ce1126,#fff", "Indonesia", "Cờ Indonesia gần như giống cờ Monaco!"],
  ["h|#fff,#dc143c", "Ba Lan", "Hai màu trắng–đỏ là màu quốc huy Ba Lan."],
  ["h|#ae1c28,#fff,#21468b", "Hà Lan", "Một trong những cờ ba sắc cổ nhất thế giới."],
  ["v|#169b62,#fff,#ff883e", "Ireland", "Màu xanh lá đại diện người Công giáo, màu cam đại diện người Tin lành."],
  ["h|#fff,#0039a6,#d52b1e", "Nga", "Cờ Nga được dùng từ thế kỷ 17 và khôi phục năm 1991."],
  ["h|#0057b7,#ffd700", "Ukraine", "Xanh tượng trưng bầu trời, vàng là đồng lúa mì."],
  ["v|#000,#fdda24,#ef3340", "Bỉ", "Cờ Bỉ lấy màu từ huy hiệu của công quốc Brabant."],
  ["h|#ed2939,#fff,#ed2939", "Áo", "Cờ Áo thuộc loại cờ cổ nhất châu Âu."],
  ["h|#0051ba,#ffda44,#d80027", "Romania", "Cờ Romania ba sắc đứng xanh–vàng–đỏ."],
  ["v|#002b7f,#fcd116,#ce1126", "Chad", "Cờ Chad màu xanh–vàng–đỏ."],
  ["h|#007a3d,#fff,#007a3d", "Nigeria", "Cờ Nigeria xanh–trắng–xanh."],
  ["h|#ff9933,#fff,#128807", "Ấn Độ", "Cờ ba màu cam–trắng–xanh lá."],
  ["h|#006a4e,#f2a800,#d21034", "Gabon", "Cờ Gabon xanh lá–vàng–xanh dương."],
  ["h|#00247d,#fff,#ce1126", "Luxembourg", "Cờ Luxembourg đỏ–trắng–xanh."],
  ["v|#0033a0,#fed100,#c8102e", "Andorra", "Cờ Andorra xanh–vàng–đỏ."],
  ["h|#0072ce,#fff,#0072ce", "Honduras", "Cờ Honduras xanh lam nhạt và trắng."],
  ["h|#ce1126,#0033a0,#ce1126", "Lào", "Cờ Lào có đĩa tròn màu trắng ở giữa."],
  ["v|#00205b,#fff,#00205b", "Guatemala", "Cờ Guatemala xanh–trắng–xanh."],
  ["h|#009a44,#ffd100,#c8102e", "Lithuania", "Cờ Lithuania vàng–xanh lá–đỏ."],
  ["h|#002f6c,#fff,#c8102e", "Costa Rica", "Cờ Costa Rica có dải đỏ lớn ở giữa."],
  ["h|#000,#009a44,#c8102e", "Malawi", "Cờ Malawi đen–đỏ–xanh."],
  ["h|#00247d,#fff,#d52b1e", "Paraguay", "Cờ Paraguay đỏ–trắng–xanh."]
];
