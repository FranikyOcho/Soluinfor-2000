import subprocess
import sys
import tkinter as tk
import threading

def ver_fecha_caducidad():
    subprocess.call("slmgr -xpr", shell=True)
def instalar_licencia():
    subprocess.call("slmgr /ipk XXXX-XXXX-XXXX-XXXX ", shell=True)
def conexion_validar():
    subprocess.call("slmgr /skms kms.digiboy.ir", shell=True)

def confirmar_licencia():
    subprocess.call("slmgr /ato", shell=True)

def cerrar_ventana():
    window.destroy()
    sys.exit()

# Ocultar la ventana de la consola
root = tk.Tk()
root.withdraw()

# Ejecutar la ventana de menús en un subproceso separado
def run_menu_window():
    window = tk.Tk()
    window.title("Menú de Licencia")
    window.geometry("300x250")

    btn_ver_fecha = tk.Button(window, text="1. Ver fecha de caducidad", command=ver_fecha_caducidad)
    btn_instalar_licencia = tk.Button(window, text="2. Instalar licencia", command=instalar_licencia)
    btn_conexion_validar = tk.Button(window, text="3. Conexión validar", command=conexion_validar)
    btn_confirmar_licencia = tk.Button(window, text="4. Confirmar licencia", command=confirmar_licencia)
    btn_cerrar_ventana = tk.Button(window, text="5. Salir", command=cerrar_ventana)

    btn_ver_fecha.pack(pady=10)
    btn_instalar_licencia.pack(pady=10)
    btn_conexion_validar.pack(pady=10)
    btn_confirmar_licencia.pack(pady=10)
    btn_cerrar_ventana.pack(pady=10)

    window.mainloop()

# Ejecutar la ventana de menús en un subproceso separado
menu_thread = threading.Thread(target=run_menu_window)
menu_thread.start()

# Ejecutar la ventana de la consola en el hilo principal
#subprocess.call("start cmd /k", shell=True)
