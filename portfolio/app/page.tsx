import { Navbar } from "@/components/navbar";
import AboutPage from "@/components/ui/about/page";
import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center pt-16 mb-10">
      <Navbar />
      <section className="pt-50 flex flex-col items-center">
        <Avatar
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
          name="Me"
          className="w-30 h-30 text-large"
        />
        <h1 className="max-w-lg break-words pt-5 text-5xl text-center">
          Wellcome, I'm <span className="text-cyan-500">developer ehehe</span>
        </h1>
        <div className="text-1xl max-w-lg pt-5 text-center break-words">
          Tôi tạo ra những trải nghiệm web hiện đại, nhanh chóng và đẹp mắt. Chuyên xây dựng full-stack applications với công nghệ mới nhất
        </div>
        <div className="pt-10 flex flex-row items-center justify-between gap-5">
          <Button size="lg" color="primary">Xem du an</Button>
          <Button
            size="lg"
            className="border border-primary dark:text-white dark:bg-gray-800 bg-white text-primary"
          >
            Contact me
          </Button>
        </div>
      </section>
      <AboutPage className="pt-30 ps-15" />
    </main>
  );
}
