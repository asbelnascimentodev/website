import qrcode
import tkinter as tk
from PIL import Image, ImageTk
from tkinter import messagebox

# Cria a janela principal
janela = tk.Tk()
janela.title("qrcode-generator")
janela.geometry("500x500")



icone = ImageTk.PhotoImage(Image.open("me.png"))
janela.iconphoto(True, icone)

# Título
label = tk.Label(janela, text="Create your qrcode with link")
label.pack(pady=5)

# Campo texto
label = tk.Label(janela, text="Your Link")
label.pack(pady=10)

entrada = tk.Entry(janela, width=30)
entrada.pack(pady=3)

# Campo do QRCode
label = tk.Label(janela, text="Your Qrcode")
label.pack(pady=15)

# Label que exibirá a imagem
label_imagem = tk.Label(janela)
label_imagem.pack(pady=5)

# Função de gerar QRCode
def gerar_qrcode():
    url = entrada.get()

    if not url:
        messagebox.showwarning("Aviso", "Digite um link ou texto!")
        return

    img = qrcode.make(url)
    img = img.resize((200, 200))

    img_tk = ImageTk.PhotoImage(img)

    label_imagem.config(image=img_tk)
    label_imagem.image = img_tk  # evita garbage collector

    # Salva o arquivo
    img.save("qrcode.png")

# Botão gerar
botao_gerar = tk.Button(janela, text="Gerar QR Code", command=gerar_qrcode)
botao_gerar.pack(pady=10)

# Botão fechar
botao_sair = tk.Button(janela, text="Fechar", command=janela.quit)
botao_sair.pack(side="bottom", pady=5)

# Inicia o loop
janela.mainloop()



