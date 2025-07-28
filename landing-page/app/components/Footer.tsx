export default function Footer() {
  return (
    <footer className="bg-black text-white py-4 mt-auto w-full">
      <div style={{ maxWidth: '430px', margin: '0 auto', width: '100%' }} className="px-2 flex flex-row items-center justify-center">
        <div className="flex-shrink-0 flex items-center justify-center w-20">
          <img src="/ggo.png" alt="GGO Logo" className="w-full h-auto ml-5" />
        </div>
        <div className="flex-1 flex flex-col justify-center text-center">
          <p className="text-xs font-semibold leading-tight">
            PHÁT HÀNH BỞI CÔNG TY CỔ PHẦN GGO
          </p>
          <div className="space-y-1 text-[6px] leading-snug mt-1">
            <p>
              Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng số: 103/GP-BTTTT do<br />
              Bộ Thông tin và Truyền thông cấp ngày 16/3/2020
            </p>
            <p>
              Quyết định phê duyệt nội dung kịch bản trò chơi điện tử G1 trên mạng số: 861/QĐ-BTTTT do<br />
              Bộ Thông tin và Truyền thông cấp ngày 21/05/2020
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}