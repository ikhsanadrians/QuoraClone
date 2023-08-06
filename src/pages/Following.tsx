import { useLocation } from 'react-router-dom';
import SidebarRoom from '../components/SidebarRoom';
import NewPost from '../components/NewPost';
import ThePost from '../components/ThePost';
import Container from '../components/layouts/Container';
import Ads from '../components/Ads';

function Following() {
  const location = useLocation();
  console.log(location.pathname)
  return (
    <>
      <Container>
        <SidebarRoom />
        <div className="posts w-full lg:w-[60%]">
          <NewPost />
          <ThePost author='Maulana Hafizh Sirajudin' authorCredentials='Linux Enthusiast | Software Engineering Student at SMKN 10 Jakarta  ·  7 Agustus' postDate='7 Agustus' authorPPUrl='https://regmedia.co.uk/2016/08/26/torvalds.jpg' question='Distro Linux Manakah Terbaik Untuk Laptop Low Spec?' answer='Pemilihan distribusi Linux terbaik untuk laptop dengan spesifikasi rendah dapat tergantung pada preferensi pengguna, kebutuhan, dan keahlian teknis. Beberapa distribusi Linux yang biasanya dianggap cocok untuk laptop dengan spesifikasi rendah adalah:' thumbnailUrl='https://linuxconfig.org/wp-content/uploads/2020/05/01-arch-linux-download.png' upvoteValue={'967'} commentValue={95} shareValue={68} />
          <ThePost author='Faris Maulana Al-Bai' authorCredentials='Unity Game Developer Di Agate Indonesia  ·  7 Agustus' postDate='7 Agustus' authorPPUrl='https://res.cloudinary.com/dewnyzbmg/image/upload/v1691343076/imageedit_1_9296104578_cj4e4u.png' question='Apa strategi terbaik untuk mengoptimalkan kinerja dan pengalaman pengguna dalam pengembangan game yang kompleks dan membutuhkan sumber daya tinggi?' answer='Untuk mengoptimalkan kinerja dan pengalaman pengguna dalam pengembangan game yang kompleks dan membutuhkan sumber daya tinggi, ada beberapa strategi yang dapat diimplementasikan:
          Optimasi Kode: Tinjau dan perbaiki kode sumber game secara teratur untuk ' thumbnailUrl='https://binus.ac.id/wp-content/uploads/2020/10/44-0-Tertarik-Jadi-Game-Developer-Profesional-Jurusan-Kuliah-Ini-Cocok-Untukmu.jpg' upvoteValue={'1.2rb'} commentValue={125} shareValue={56} />
            <ThePost author='Ardiyan Syahbani' authorCredentials='Sound Engineer Syncronize Fest Sejak 2018  ·  5 Agustus' postDate='7 Agustus' authorPPUrl='https://res.cloudinary.com/dewnyzbmg/image/upload/v1691344285/WhatsApp_Image_2022-03-27_at_09.17.06_uj3ue8.jpg' question='Pribadi terkenal mana yang diidolakan dan dikenal dalam sejarah yang sebenarnya adalah seorang yang mengerikan?' answer='Hadirin sekalian, saya persembahkan kepada Anda John Lennon:' thumbnailUrl='https://qph.cf2.quoracdn.net/main-qimg-2804660e569b8607bb36c78746f279bd-lq' upvoteValue={'1.2rb'} commentValue={125} shareValue={56} />
            <ThePost author='Faris Maulana Al-Bai' authorCredentials='Unity Game Developer Di Agate Indonesia  ·  7 Agustus' postDate='7 Agustus' authorPPUrl='https://res.cloudinary.com/dewnyzbmg/image/upload/v1691343076/imageedit_1_9296104578_cj4e4u.png' question='Apa strategi terbaik untuk mengoptimalkan kinerja dan pengalaman pengguna dalam pengembangan game yang kompleks dan membutuhkan sumber daya tinggi?' answer='Untuk mengoptimalkan kinerja dan pengalaman pengguna dalam pengembangan game yang kompleks dan membutuhkan sumber daya tinggi, ada beberapa strategi yang dapat diimplementasikan:
          Optimasi Kode: Tinjau dan perbaiki kode sumber game secara teratur untuk ' thumbnailUrl='https://binus.ac.id/wp-content/uploads/2020/10/44-0-Tertarik-Jadi-Game-Developer-Profesional-Jurusan-Kuliah-Ini-Cocok-Untukmu.jpg' upvoteValue={'1.2rb'} commentValue={125} shareValue={56} />
        </div>
        <Ads/>
      </Container>
      <div className="mb-64">

      </div>

    </>
  )
}

export default Following;