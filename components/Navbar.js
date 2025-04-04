// components/Navbar.js
import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = () => {
    const router = useRouter();

    return (
        <Navbar bg="white" expand="lg" className="shadow-sm">
            <Container>
                <Link href="/" legacyBehavior>
                    <Navbar.Brand as="a" className="fw-bold">
                        <i className="fas fa-graduation-cap me-2"></i>
                        HSAPSS Windsor
                    </Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link href="/" legacyBehavior>
                            <Nav.Link as="a" active={router.pathname === '/'}>
                                <i className="fas fa-home me-2"></i>
                                Dashboard
                            </Nav.Link>
                        </Link>
                        <Link href="/students-table" legacyBehavior>
                            <Nav.Link as="a" active={router.pathname === '/students-table'}>
                                <i className="fas fa-users me-2"></i>
                                Students
                            </Nav.Link>
                        </Link>
                        <Link href="/call-logs" legacyBehavior>
                            <Nav.Link as="a" active={router.pathname === '/call-logs'}>
                                <i className="fas fa-phone-alt me-2"></i>
                                Call Logs
                            </Nav.Link>
                        </Link>
                        <Link href="/add-yuvak" legacyBehavior>
                            <Nav.Link as="a" active={router.pathname === '/add-yuvak'}>
                                <i className="fas fa-user-plus me-2"></i>
                                Add Student
                            </Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

            <style jsx global>{`
                .navbar {
                    padding: 1rem 0;
                }

                .navbar-brand {
                    color: #4e73df !important;
                    font-size: 1.5rem;
                    cursor: pointer;
                }

                .nav-link {
                    color: #5a5c69 !important;
                    font-weight: 500;
                    padding: 0.5rem 1rem !important;
                    border-radius: 0.375rem;
                    transition: all 0.2s;
                    cursor: pointer;
                }

                .nav-link:hover {
                    color: #4e73df !important;
                    background-color: #f8f9fc;
                }

                .nav-link.active {
                    color: #4e73df !important;
                    background-color: #f8f9fc;
                }
            `}</style>
        </Navbar>
    );
};

export default Navigation;
