import '../style/footer.css'
import logo from '../images/bnkbet_logo_red.jpg'
import footerlogo from '../images/bnkbet_logo_gold_transparent.png'
export const Footer = () => {
    return <div class='footer'>

        <div className='container mx-auto'>
            <section className='section-footer'>
                <div style={{ padding: 10 }}>
                    <div className='flex w-full'>
                        <div className='w-2/5'>
                            <a href='/'>
                                <img alt='bnkbet' src={logo} />
                            </a>
                        </div>
                        <div className='text-white w-3/5'>
                            <div style={{ padding: 10, textAlign: 'left' }}>
                                <div className='mb-6'>
                                    <a href='/'>
                                        <img alt='bnkbet' src={footerlogo} width='177' height='40' style={{ maxWidth: 177, display: 'inline' }} />
                                    </a>
                                เว็บแทงบอลออนไลน์ผ่านเน็ต ยอดนิยมอันดับ 1 ตัวแทนโดยตรงจากbnkbet ที่เป็นที่นิยมใช้บริการ มากที่สุดในประเทศไทย รับเดิมพันกีฬาออนไลน์และคาสิโนทุกประเภท บริการลูกค้าทุกวัน 7 วัน 24 ชั่วโมง ไม่มีวันหยุด (7x24hr)


                                </div>
                                <p>
                                    <span>Copyright 2021 © </span>
                                    <span style={{ color: '#ffff00' }}>แทงบอล</span>
                                    <span> All Rights Reserved</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
}