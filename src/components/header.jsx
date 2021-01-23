import '../style/header.css'
import logo from '../images/bnkbet_logo_red.jpg'

export const Header = () => {
    return <div>
        <div className='container mx-auto'>
            <div className='flex'>
                <div className='image-header p-2.5'>
                <a href="https://lin.ee/qmyYJcY" target="_blank" rel="noreferrer">
                        <img alt='bnkbet' src={logo} />
                    </a>
                </div>
                <div className='p-2.5'>
                    <div className='mt-8 mb-2.5 flex '>
                        <div className='px-1.5'>
                            <input className='input-field' placeholder='Username' />
                        </div>
                        <div className='px-1.5'>
                            <input className='input-field' type='password' placeholder='Password' />
                        </div>
                        <div className='px-1.5'>
                            <button className='login-btn w-full' style={{ width: 154 }}>
                                <span>
                                    <span><i className='log-logo'> </i></span>
                                    <span>เข้าสู่ระบบ</span>
                                </span></button>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='mr-2.5'>
                            <a href="https://lin.ee/qmyYJcY" target="_blank" rel="noreferrer"><button className='register-btn'>สมัครสมาชิก</button></a>
                            
                        </div>
                        <div>
                        <a href="https://lin.ee/qmyYJcY" target="_blank" rel="noreferrer">
                            <button className='contactus-btn'>ติดต่อเรา</button></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <section className='section section-header'>
            <div className='container mx-auto'>
                <nav className='nav-menu'>
                    <ul>
                        <li className='active'><a href="https://lin.ee/qmyYJcY" target="_blank" rel="noreferrer">หน้าแรก</a></li>
                        <li><a href="https://lin.ee/qmyYJcY" target="_blank" rel="noreferrer">สมัครสมาชิก</a></li>
                        <li><a href="https://lin.ee/qmyYJcY" target="_blank" rel="noreferrer">UFABET</a></li>
                        <li><a href="https://lin.ee/qmyYJcY" target="_blank" rel="noreferrer">ทางเข้าเล่น</a></li>
                        <li><a href="https://lin.ee/qmyYJcY" target="_blank" rel="noreferrer">บาคาร่าออนไลน์</a></li>
                        <li><a href="https://lin.ee/qmyYJcY" target="_blank" rel="noreferrer">คาสิโนออนไลน์</a></li>
                        <li><a href="https://lin.ee/qmyYJcY" target="_blank" rel="noreferrer">ผลบอลสด 7M</a></li>
                        <li><a href="https://lin.ee/qmyYJcY" target="_blank" rel="noreferrer">แจ้งฝากถอน</a></li>
                    </ul>
                </nav>
            </div>
        </section>
    </div>
}