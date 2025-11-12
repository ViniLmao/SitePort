  // Menu mobile toggle
        document.querySelector('.menu-toggle').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('.nav-links').classList.remove('active');
            });
        });

        // Smooth scroll para links internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Formulário de contato funcional
        const contactForm = document.getElementById('contact-form');
        const formMessage = document.getElementById('form-message');
        const submitBtn = document.getElementById('submit-btn');
        const btnText = document.getElementById('btn-text');
        const btnLoading = document.getElementById('btn-loading');
        
        if (contactForm) {
            contactForm.addEventListener('submit', async function(e) {
                e.preventDefault();
                
                // Validação básica
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;
                
                if (!name || !email || !subject || !message) {
                    showFormMessage('Por favor, preencha todos os campos.', 'error');
                    return;
                }
                
                if (!isValidEmail(email)) {
                    showFormMessage('Por favor, insira um email válido.', 'error');
                    return;
                }
                
                // Mostrar loading
                btnText.style.display = 'none';
                btnLoading.style.display = 'block';
                submitBtn.disabled = true;
                
                try {
                    // Simular envio do email (substitua por sua lógica real)
                    await sendEmail(name, email, subject, message);
                    
                    // Sucesso
                    showFormMessage('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
                    contactForm.reset();
                } catch (error) {
                    // Erro
                    showFormMessage('Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente pelo telefone.', 'error');
                } finally {
                    // Restaurar botão
                    btnText.style.display = 'block';
                    btnLoading.style.display = 'none';
                    submitBtn.disabled = false;
                }
            });
        }
        
            // Esta é uma simulação - substitua por sua lógica real de envio
            
            // Opção 1: Usar EmailJS (gratuito até 200 emails/mês)
            // Você precisaria se registrar em https://www.emailjs.com/


        // Exemplo de integração com EmailJS (descomente e configure)
        
        // Inicializar EmailJS (substitua com seu User ID)
        (function() {
            emailjs.init("J7TWY-3NVxClMOuDH");
        })();
        
        // Função de envio com EmailJS
        async function sendEmailWithEmailJS(name, email, subject, message) {
            const templateParams = {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message,
                to_email: 'vinicaruccio98@gmail.com' // Seu email
            };
            
            try {
                await emailjs.send('service_a69rsiq', 'template_xe2ozij', templateParams);
                return true;
            } catch (error) {
                console.error('Erro EmailJS:', error);
                throw new Error('Falha no envio do email');
            }
        }
        