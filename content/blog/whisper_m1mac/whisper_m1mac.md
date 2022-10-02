---
title: m1macでOpenAIのwhisperを遊ぶ
date: "2022-10-02"
description: "M1Macbook Air を使ってwhisperで遊びます．install時のエラーについても説明します．"
tag: "Python"
---

# whisperで遊ぶ
今回は，最近話題になっていたOpenAIの音声認識ツールwhisperを使って遊んでみたので，知見を共有します．

## 実行環境
* Macbook Air (M1)
* macOS Monterey: 12.6.1
* Python3.9.9
  * pyenv+virtualenv
  * local



## セットアップ
基本的には[公式](https://github.com/openai/whisper)に従って進めました．
1. `ffmpeg`のインストール
    
    MacOS(brew)に従います．
    ```shell
    brew install ffmpeg
    ```

2. [Rust](https://rustup.rs)が必要とのこと．それに伴って`setuptools-rust`を`pip install`する．

    ```shell
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh # Rustのインストール
    pip install setuptools-rust #setuptools-rustのインストール
    ```

3. Rustをインストールしたのち，`cargo`のパスを通す．

    ```shell
    echo export PATH="$HOME/.cargo/bin:$PATH" >> $HOME/.zshenv
    ```

4. shellを再起動するか，以下のコマンドを実行する．

    ```shell
    source "$HOME/.cargo/bin:$PATH"
    ```

5. インストール環境が揃ったので，`whisper`を`pip install`する．

    ```shell
    pip install git+https://github.com/openai/whisper.git 
    ```


これで`whisper`が使えるはず．


## コケたポイント
* 5.でgitコマンドの認証に関するエラーを吐く

    これに関して自分も引っかかった．具体的には，`cargo`コマンドの仕様によるもので，`cargo`は基本的には`ssh-agent`を使用して公開鍵認証をパスしてGithubに接続するようです．もちろん`ssh-agent`に秘密鍵を登録しておかないと認証失敗します．従って解決方法は，

    1. `ssh-agent`に秘密鍵を登録する．
    2. `cargo`のオプションを指定して，`ssh-agent`で認証失敗したら`git`コマンドでの取得をトライするようにする．

    という二択になります．

    1. `ssh-agent`に秘密鍵を登録する．

        Githubのssh登録に関しては他のWebサイトに任せます．以下は秘密鍵が`$HOME/path/to/secret.key`にあるとします．

        ```shell
        ssh-add --apple-use-keychain $HOME/path/to/secret.key
        ```

        ※`ssh-add`の`-K`オプションは`--apple-use-keychain`に置換えられていくらしい．
    
    2. `cargo`のオプションを指定して，`ssh-agent`で認証失敗したら`git`コマンドでの取得をトライするようにする．

        `$HOME/.cargo/config`に以下を加えるだけ．
        ```conf
        [net]
        git-fetch-with-cli = true
        ```
