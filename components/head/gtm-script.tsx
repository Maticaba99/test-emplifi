const GTM_SCRIPT_URL = "https://www.googletagmanager.com/gtm.js?id=GTM-54CCCT2"

const GTM_SCRIPT_CONTENTS = {
	__html: `(function(w,d,s,l){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'${GTM_SCRIPT_URL}'+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer');`,
}

export default function GTMScript() {
	return (
		<>
			<link rel='preload' as='script' href={GTM_SCRIPT_URL} />
			<script dangerouslySetInnerHTML={GTM_SCRIPT_CONTENTS} />
		</>
	)
}
