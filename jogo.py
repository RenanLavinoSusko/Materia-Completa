#Jogo da velha
jv = [[0 for _ in range(3)] for _ in range(3)]
sm = 1
jgd = ""
pt = 0
#Posições do tabuleiro
for i in range(0, 3):
    for j in range(0, 3):
        jv[i][j] = sm
        sm +=1
#Começo
while True:
    print("Jogo da Velha")
    #tabuleiro
    for i in range(0, 3):
            for j in range(0, 3):
                print(f"[{jv[i][j]:^4}]", end=" ")
            print(" ")
    #jogador
    if jgd == "X":
        jgd = "O"
    else:
        jgd = "X"
    #Jogada
    ps = int(input("Qual posição [" + str(jgd) + "] vai ficar? "))
    match ps:
        case 1 | 2 | 3:
            if (jv[0][ps-1] != jgd):
                jv[0][(ps-1)] = jgd
            else:
                ps = int(input("Escolha outra posição: "))
        case 4 | 5 | 6:
            if (jv[1][ps-4] != jgd):
                jv[1][(ps-4)] = jgd
            else:
                ps = int(input("Escolha outra posição: "))
        case 7 | 8 | 9:
            if (jv[2][ps-7] != jgd):
                jv[2][(ps-7)] = jgd
            else:
                ps = int(input("Escolha outra posição: "))
    for i in range(0, 3):
        if (jv[i][0] == jv[i][1]) and (jv[i][0] == jv[i][2]):
            print(jv[i][j], "Venceu!")
            pt +=1
        elif (jv[0][i] == jv[1][i]) and (jv[0][i] == jv[2][i]):
            print(jv[0][i], "Venceu!")
            pt +=1
        elif (jv[0][0] == jv[1][1]) and (jv[0][0] == jv[2][2]):
            print(jv[0][0], "Venceu!")
            pt +=1
        elif (jv[0][2] == jv[1][1]) and (jv[1][1] == jv[2][0]):
            print(jv[0][2], "Venceu!")
            pt +=1
    if pt == 1:
        break
print("fim")