// bài 1
document
  .getElementById("admissionForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let diemChuan = parseFloat(document.getElementById("diemChuan").value);
    let diemMon1 = parseFloat(document.getElementById("diemMon1").value);
    let diemMon2 = parseFloat(document.getElementById("diemMon2").value);
    let diemMon3 = parseFloat(document.getElementById("diemMon3").value);
    let khuVuc = document.getElementById("chonKhuVuc").value;
    let doiTuong = parseInt(document.getElementById("doiTuong").value);

    if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
      document.getElementById("ketQua").innerText =
        "Thí sinh rớt do có môn điểm 0.";
      return;
    }
    // Tính điểm ưu tiên theo khu vực
    let diemKhuVuc = 0;
    switch (khuVuc) {
      case "A":
        diemKhuVuc = 2;
        break;
      case "B":
        diemKhuVuc = 1;
        break;
      case "C":
        diemKhuVuc = 0.5;
        break;
    }

    // Tính điểm ưu tiên theo đối tượng
    let diemDoiTuong = 0;
    switch (doiTuong) {
      case 1:
        diemDoiTuong = 2.5;
        break;
      case 2:
        diemDoiTuong = 1.5;
        break;
      case 3:
        diemDoiTuong = 1;
        break;
    }
    let tongDiem = diemMon1 + diemMon2 + diemMon3 + diemKhuVuc + diemDoiTuong;

    if (tongDiem >= diemChuan) {
      document.getElementById(
        "ketQua"
      ).innerText = `Thí sinh đậu với tổng điểm là ${tongDiem}.`;
    } else {
      document.getElementById(
        "ketQua"
      ).innerText = `Thí sinh rớt với tổng điểm là ${tongDiem}.`;
    }
  });

// Bài Tập 2
document
  .getElementById("billForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let ten = document.getElementById("name").value;
    let soKw = parseFloat(document.getElementById("kW").value);
    let tongTien = tinhTienDien(soKw);

    document.getElementById(
      "result"
    ).textContent = `Tên: ${ten}, Tổng Tiền: ${tongTien}đ`;
  });
function tinhTienDien(soKw) {
  let tongTien = 0;
  let soKwConLai = soKw;

  //Tính giá 50 Kw đầu tiên
  if (soKwConLai > 0) {
    let kwTinhTien = Math.min(soKwConLai, 50);
    tongTien += kwTinhTien * 500;
    soKwConLai -= kwTinhTien;
  }
  //Tính giá cho 50 Kw tiếp theo
  if (soKwConLai > 0) {
    let kwTinhTien = Math.min(soKwConLai, 50);
    tongTien += kwTinhTien * 650;
    soKwConLai -= kwTinhTien;
  }
  // Tính giá cho 100 Kw tiếp theo
  if (soKwConLai > 0) {
    let kwTinhTien = Math.min(soKwConLai, 100);
    tongTien += kwTinhTien * 850;
    soKwConLai -= kwTinhTien;
  }
  // Tính giá cho 150 Kw tiếp theo
  if (soKwConLai > 0) {
    let kwTinhTien = Math.min(soKwConLai, 150);
    tongTien += kwTinhTien * 1100;
    soKwConLai -= kwTinhTien;
  }
  // Tính giá cho phần còn lại
  if (soKwConLai > 0) {
    tongTien += soKwConLai * 1300;
  }
  return tongTien;
}

// bài 3
function tinhThue() {
  // Lấy giá trị từ các ô nhập liệu
  let hoTen = document.getElementById("hoTen").value;
  let tongThuNhapNam = parseFloat(document.getElementById("thuNhap").value);
  let soNguoiPhuThuoc = parseInt(
    document.getElementById("soNguoiPhuThuoc").value
  );
  console.log(hoTen, tongThuNhapNam, soNguoiPhuThuoc);
  // Tính thu nhập chịu thuế
  let thuNhapChiuThue = tongThuNhapNam - 4 - soNguoiPhuThuoc * 1.6;
  let thueSuat = 0;

  // Tính số thuế phải trả
  let thue = 0;

  // Xác định thuế suất dựa trên thu nhập chịu thuế
  if (thuNhapChiuThue <= 60) {
    thue = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue <= 120) {
    thue = 60 * 0.05 + (thuNhapChiuThue - 60) * 0.1;
  } else if (thuNhapChiuThue <= 210) {
    thue = 60 * 0.05 + 60 * 0.1 + (thuNhapChiuThue - 120) * 0.15;
  } else if (thuNhapChiuThue <= 384) {
    thue = 60 * 0.05 + 60 * 0.1 + 90 * 0.15 + (thuNhapChiuThue - 210) * 0.2;
  } else if (thuNhapChiuThue <= 624) {
    thue =
      60 * 0.05 +
      60 * 0.1 +
      90 * 0.15 +
      174 * 0.2 +
      (thuNhapChiuThue - 384) * 0.25;
  } else if (thuNhapChiuThue <= 960) {
    thue =
      60 * 0.05 +
      60 * 0.1 +
      90 * 0.15 +
      174 * 0.2 +
      240 * 0.25 +
      (thuNhapChiuThue - 624) * 0.3;
  } else {
    thue =
      60 * 0.05 +
      60 * 0.1 +
      90 * 0.15 +
      174 * 0.2 +
      240 * 0.25 +
      336 * 0.3 +
      (thuNhapChiuThue - 960) * 0.35;
  }

  console.log(thue);
  // Hiển thị kết quả
  document.getElementById(
    "ketQua3"
  ).innerHTML = `Họ tên : ${hoTen} \tThuế thu nhập cá nhân phải trả :${thue}`;
}

// bài 4
function hienThiSoKetNoi() {
  let loaiKhachHang = document.getElementById("loaiKhachHang").value;
  let ketNoiGroup = document.getElementById("ketNoiGroup");

  if (loaiKhachHang === "doanhNghiep") {
    ketNoiGroup.style.display = "block";
  } else {
    ketNoiGroup.style.display = "none";
  }
}

document.getElementById("tinhTienCap").onclick = function () {
  console.log("xin chao");

  let maKhachHang = document.getElementById("maKhachHang").value;
  let loaiKhachHang = document.getElementById("loaiKhachHang").value;
  let soKenhCaoCap = parseInt(document.getElementById("soKenhCaoCap").value);
  console.log(maKhachHang);
  console.log(loaiKhachHang);
  console.log(soKenhCaoCap);
  let soKetNoi = 0;

  if (loaiKhachHang === "doanhNghiep") {
    soKetNoi = parseInt(document.getElementById("soKetNoi").value);
  }

  let tienCap = 0;

  if (loaiKhachHang === "nhaDan") {
    tienCap = 4.5 + 20.5 + 7.5 * soKenhCaoCap;
  } else if (loaiKhachHang === "doanhNghiep") {
    tienCap = 15 + 75;
    if (soKetNoi > 10) {
      tienCap += (soKetNoi - 10) * 5;
    }
    tienCap += 50 * soKenhCaoCap;
  }

  // Correcting the display of the result
  document.getElementById(
    "ketQua4"
  ).innerHTML = `Mã Khách Hàng: ${maKhachHang}\nTiền Cáp: $${tienCap.toFixed(
    2
  )}`;
};
