import { buildMetadata } from '@/lib/seo'
import { WHATSAPP_LINKS } from '@/lib/constants'
import Breadcrumb from '@/components/Breadcrumb'
import CtaSection from '@/components/CtaSection'

export const metadata = buildMetadata({
  title: 'Iletisim',
  description:
    'AloIPTV iletisim. WhatsApp uzerinden 7/24 destek alin. Ortalama yanit suremiz 3 dakikadir. Teknik destek, satis ve bayilik bilgisi.',
  path: '/iletisim/',
})

export default function IletisimPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-12 sm:pb-16">
        <Breadcrumb
          items={[
            { label: 'Ana Sayfa', href: '/' },
            { label: 'Iletisim' },
          ]}
        />

        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-red-400 text-xs font-bold uppercase tracking-widest bg-red-500/10 border border-red-500/20 px-4 py-1.5 rounded-full mb-6">
            Iletisim
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Bizimle Iletisime Gecin
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            WhatsApp uzerinden 7/24 destek alin. Ortalama yanit suremiz 3
            dakikadir.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 sm:mb-16">
          {/* WhatsApp Card */}
          <a
            href={WHATSAPP_LINKS.support}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#111111] border border-[#1a1a1a] rounded-2xl p-8 hover:border-green-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-xl mb-2">WhatsApp</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              En hizli iletisim yolu. Satis, teknik destek ve genel sorulariniz
              icin 7/24 ulasabilirsiniz.
            </p>
            <p className="text-green-400 font-semibold text-base group-hover:underline">
              +1 (718) 586-4134
            </p>
          </a>

          {/* Telegram Card */}
          <a
            href={WHATSAPP_LINKS.default}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#111111] border border-[#1a1a1a] rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold text-xl mb-2">Telegram</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Telegram uzerinden de bize ulasabilirsiniz. Duyurular ve destek
              icin kanalimizi takip edin.
            </p>
            <p className="text-blue-400 font-semibold text-base group-hover:underline">
              @aloiptv
            </p>
          </a>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 sm:mb-16">
          <div className="bg-[#111111] border border-[#1a1a1a] rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">
              <svg className="w-8 h-8 text-red-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-1">Calisma Saatleri</h3>
            <p className="text-gray-400 text-sm">7/24 Kesintisiz Destek</p>
          </div>

          <div className="bg-[#111111] border border-[#1a1a1a] rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">
              <svg className="w-8 h-8 text-red-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-1">Yanit Suresi</h3>
            <p className="text-gray-400 text-sm">Ortalama 3 dakika</p>
          </div>

          <div className="bg-[#111111] border border-[#1a1a1a] rounded-2xl p-6 text-center">
            <div className="text-3xl mb-3">
              <svg className="w-8 h-8 text-red-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <h3 className="text-white font-semibold mb-1">Dil</h3>
            <p className="text-gray-400 text-sm">Turkce + Ingilizce</p>
          </div>
        </div>

        {/* Bayilik Section */}
        <div className="bg-[#111111] border border-[#1a1a1a] rounded-2xl p-8 sm:p-12 text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Bayilik Basvurusu
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            IPTV bayilik programimiz ile kendi musterilerinize hizmet verin.
            Toplu indirimli fiyatlar, ozel bayi paneli ve teknik destek ile
            ishinizi buyutun.
          </p>
          <a
            href={WHATSAPP_LINKS.dealer}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-red-500 hover:bg-red-600 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-red-500/20"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Bayilik Bilgisi Al
          </a>
        </div>
      </section>

      {/* CTA */}
      <CtaSection />
    </main>
  )
}
