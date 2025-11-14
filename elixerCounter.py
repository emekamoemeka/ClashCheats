import time
import math

generation = 2.8
elixir = 7
start = time.time()

def main():    
    global elixir
    while True:
        if elixir < 10:
            elixir_rate = math.floor((time.time() - start) / 120) + 1
            time.sleep(generation * elixir_rate)
            elixir += 1
    
            print(elixir)

if __name__ == "__main__":
    main()
